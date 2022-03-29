import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from 'miragejs';

createServer({
  
  //criando modelo de banco de dados
  models:{
    transaction:Model //tipo model
  },
  //passar dados iniciais para o database
  seeds(server){
      server.db.loadData({
        transactions:[{
          id:1,
          title:'freelancer app',
          type:'deposit',
          amount:6500,
          category:'dev',
          createdAt: new Date('2022-02-15 9:00:00'),
        },
        {
          id:2,
          title:'Netflix',
          type:'withdraw',
          amount:-55.90,
          category:'entretenimento',
          createdAt: new Date('2022-02-15 9:00:00'),
        }
      ]
      })
  },

  routes(){
    this.namespace = 'api'

    //rota de listagem de transacoes
    this.get('/transactions',()=>{
        return this.schema.all('transaction')
      })
    //rota de adicao
    // schema e request
    // recebe os dados (data) 
    ///eles vem em formato de texto , convertelos para json (json.parse)
    this.post('/transactions' ,(schema,request)=> {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction',data);//retornando a criacao da transaction
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
  <App/ >
  </React.StrictMode>,
  document.getElementById('root')
);
