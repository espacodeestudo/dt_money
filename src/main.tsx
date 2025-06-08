import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global.ts'
import { createServer,Model } from 'miragejs'
import {App} from './App.tsx'


createServer({
  models:{
    transaction: Model,
  },

  seeds(server) {
      server.db.loadData({
        transactions:[
          {
            id:1,
            title:'Frelance de website',
            category:'Dev',
            type:'deposit',
            amount:6000,
            createdAt: new Date('2025-06-07 09:00:00')
          },
          {
            id:2,
            title:'Aluguel',
            category:'Casa',
            type:'withdraw',
            amount:1100,
            createdAt: new Date('2025-06-17 11:00:00')
          }
        ]
      })
  },
  routes(){
    this.namespace='api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

      this.post('/transactions', (schema, request) => {
        const data =JSON.parse(request.requestBody);
        return schema.create('transaction', data);
    })
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyle/>
  </StrictMode>,
)
