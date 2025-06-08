import React, {useContext} from 'react'
import { TransactionContext } from '../../Context/transactionContext';
import { Container } from './style'



function TransactionsTable() {
   const {transactions}= useContext(TransactionContext)
    
   
   
  return (
    <React.Fragment>

        <Container>
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>{
                            new Intl.NumberFormat('pt-AO', {
                                style:'currency',
                                currency:'AOA'
                            }).format(transaction.amount)
                            }
                        </td>
                        <td>{transaction.category}</td>
                        <td>{
                            new Intl.DateTimeFormat('pt-AO').format(new Date(transaction.createdAt))    
                        }</td>
                    </tr>
                    ))}
                   
                </tbody>
            </table>
        </Container>
    </React.Fragment>
  )
}

export {TransactionsTable}