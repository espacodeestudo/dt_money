import React from 'react'
import { Container,Content } from './styles'


interface HeaderProps{
  handleOpenTransactionModal: ( ) => void
}
function Header({handleOpenTransactionModal}: HeaderProps) {

 
  return (
    <React.Fragment>
       <Container>
        <Content>
          <h3>dt money</h3>
          <button type='button' onClick={handleOpenTransactionModal}>Nova transação</button>

          
        </Content>
       </Container>
    </React.Fragment>
  )
}

export { Header}