import React,{useState} from 'react'
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionContextProvider } from './Context/transactionContext'
function App() {

   const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false)
  
    function handleOpenTransactionModal (){
      setIsNewTransactionOpenModal(true);
    }
  
    function handleCloseTransactionModa (){
       setIsNewTransactionOpenModal(false);
    }

  return (
    <React.Fragment>
      <TransactionContextProvider >

    <Header handleOpenTransactionModal={handleOpenTransactionModal}/>
    <Dashboard/>
    <NewTransactionModal isOpen={isNewTransactionOpenModal} 
    onRequestClose={handleCloseTransactionModa}/>
      </TransactionContextProvider>
    </React.Fragment>
  )
}

export {App}
