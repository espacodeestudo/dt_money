import React, {useState, useEffect,createContext} from "react"
import {api} from '../service/api';

interface Transaction {
    id:number;
    title:string;
    amount:number;
    type:string;
    category:string;
    createdAt:string;
}

interface TransactionContextProviderProp{
    children:React.ReactNode;
}

interface TransactionContextData{
    transactions:Transaction[];
    createTransaction:(transaction:TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt' >

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);


export const TransactionContextProvider= ({children}:TransactionContextProviderProp) =>{
    const [transactions,setTransaction] =useState<Transaction[]>([])
        useEffect(() => {
            api.get('transactions')
            .then(response => setTransaction(response.data.transactions))
            
        },[])

        async function createTransaction(transactionInput:TransactionInput){
            const response = await api.post('transactions', {
                ...transactionInput,
                createdAt: new Date()
            });
            const {transaction} =  response.data;

            setTransaction( prev => [
                ...prev,
                transaction
            ])
        }


    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}