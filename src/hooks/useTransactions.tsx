import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";



//typos de dados que vem nessa transaction
interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}
//tipo de conteudo
interface TransactionsProviderProps {
    //reactnode - recebe qualquer conteudo node 
    children: ReactNode;
}
//criando interface do input e dizendo quais seus dados
/*
interface TransactionInput {
    title: string,
    amount: number,
    type: string,
    category: string,
}*/

type TransactionInput = Omit<Transaction,'id'| 'createdAt'>;

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}
export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    //mostrar os dados vamos usar um estado
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        //recebendo os dados da api 
        api.get('transactions')//buscando informacoes
            .then(response => setTransactions(response.data.transactions))
    }, [])


     async function createTransaction(transactionInput: TransactionInput) {
        //rota de insercao/criacao das transacoes
        //recebendo dados no response 
      const response = await api.post('/transactions',{
        ...transactionInput,
        createdAt:new Date()
      }
       )

      const {transaction} = response.data;

      setTransactions([
          ...transactions,
          transaction,
      ])
    }

    return (
        //children : conteudo
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context;
}