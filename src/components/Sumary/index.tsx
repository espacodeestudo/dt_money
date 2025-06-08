import React, {useContext} from 'react';
import { TransactionContext } from '../../Context/transactionContext';
import { Container } from './style'
import { ArrowUpCircle,  ArrowDownCircle } from 'lucide-react'

function Sumary() {
     const {transactions}= useContext(TransactionContext)

     const sumary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total +=transaction.amount
        }
        else{
          acc.withdraws += transaction.amount;
          acc.total -=transaction.amount  
        }

        return acc;
     },{
        deposits:0,
        withdraws:0,
        total:0
     })

     const formatCurrency = (value:number) =>{
        return new Intl.NumberFormat("pt-AO",{
                style: 'currency',
                currency:'AOA'
        }).format(value)
                    
     }
  return (
    <React.Fragment>
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <span><ArrowUpCircle/></span>
                </header>
                <strong>{formatCurrency(sumary.deposits)}</strong>
            </div>
             <div>
                <header>
                    <p>Saidas</p>
                    <span><ArrowDownCircle/></span>
                </header>
                <strong>- {formatCurrency(sumary.withdraws)}</strong>
            </div>
             <div className="light-background">
                <header>
                    <p>Total</p>
                    <span><ArrowDownCircle/></span>
                </header>
                <strong> { formatCurrency(sumary.total)}</strong>
            </div>
        </Container>
    </React.Fragment>
  )
}

export {Sumary}