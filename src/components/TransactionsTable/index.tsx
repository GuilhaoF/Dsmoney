import { useContext} from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";





export function TransactionsTable() {

    //consumindo dados  do contexto em outro componente
    const {transactions} = useContext(TransactionsContext)

    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        {
                            //colunas da tabela
                        }
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title.toLocaleUpperCase()}</td>
                                <td className={transaction.type}>{
                                    //BIBLIOTECA NATIVA INTL 
                                    new Intl.NumberFormat('pt-br', {
                                        style:'currency',
                                        currency:'BRL'
                                    }
                                    ).format(transaction.amount)
                                }</td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}