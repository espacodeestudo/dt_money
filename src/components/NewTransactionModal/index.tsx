import React, {useState,useContext} from 'react'
import { TransactionContext } from '../../Context/transactionContext';
import Modal from "react-modal"
import { Container,TransactionTypeContainer, RadioBox } from './styles';
import {X,ArrowUpCircle,  ArrowDownCircle} from "lucide-react"

interface NewTransitionModalProps{
    isOpen: boolean;
    onRequestClose:() => void;
}


Modal.setAppElement("#root")
function NewTransactionModal({isOpen, onRequestClose}: NewTransitionModalProps) {
  const {createTransaction}= useContext(TransactionContext)
  const [type, setType] = useState<"deposit"| "withdraw" >('deposit')
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(e:React.FormEvent){
    e.preventDefault()

    
    await createTransaction({
      title,
      type,
      amount,
      category
    })

    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
    onRequestClose()
    

   
  }
  return (
    <React.Fragment>
        <Modal isOpen={isOpen} 
        onRequestClose={ onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        > 

        <button type="button" 
        onClick={onRequestClose}  
        className="react-modal-close"
        >
          <X size={24}/>
        </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar nova transação</h2>
                <input 
                placeholder ="Titulo" 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                placeholder ="Valor" 
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                
                />

                <TransactionTypeContainer>
                  <RadioBox
                  type="button" 
                  onClick={() => setType("deposit")}
                  isActive={type === "deposit"}
                  activeColor="green"
                  >
                    <span><ArrowUpCircle size={20}/></span>
                    <h4>Entrada</h4>
                  </RadioBox>

                  <RadioBox 
                  type="button"
                  onClick={() => setType("withdraw")}
                  isActive={type === "withdraw"}
                  activeColor="red"
                  >
                    <span><ArrowDownCircle size={20}/></span>
                    <h4>Saida</h4>
                  </RadioBox>

                </TransactionTypeContainer>

                <input 
                placeholder ="categoria" 
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit"> Cadastrar</button>

            </Container>
        </Modal>
    </React.Fragment>
  )
}

export {NewTransactionModal}