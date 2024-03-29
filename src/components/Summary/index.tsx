import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import totalSvg from '../../assets/total.svg'
import outcomeImg from '../../assets/outcome.svg'
import {  useTransactions } from "../../hooks/useTransactions";

export function Summary() {

    //consumindo dados do contexto
    //usando hook UseContext
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {
                        //BIBLIOTECA NATIVA INTL 
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }
                        ).format(summary.deposits)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="entradas" />
                </header>
                <strong>
                    -
                    {
                        //BIBLIOTECA NATIVA INTL 
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }
                        ).format(summary.withdraws)
                    }
                </strong>
            </div>
            <div className="totalbalance">
                <header>
                    <p>Total</p>
                    <img src={totalSvg} alt="entradas" />
                </header>
                <strong>
                    {
                        //BIBLIOTECA NATIVA INTL 
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }
                        ).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}