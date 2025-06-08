import React from 'react'
import { Container } from './styles'
import { Sumary } from '../Sumary'
import { TransactionsTable } from '../TransactionsTable'
function Dashboard() {
  return (
    <React.Fragment> 
        <Container>
       <Sumary/>
       <TransactionsTable/>

        </Container>
    </React.Fragment>
  )
}

export {Dashboard}