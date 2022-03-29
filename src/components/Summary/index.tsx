import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import totalSvg from '../../assets/total.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){

    //consumindo dados do contexto
    //usando hook UseContext
    const {transactions} = useContext(TransactionsContext);


    return(
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="entradas"/>
               </header>
               <strong>R$1000.00</strong>
           </div>
           <div>
               <header>
                   <p>Saidas</p>
                   <img src={outcomeImg} alt="entradas"/>
               </header>
               <strong>R$10.00</strong>
           </div>
           <div className="totalbalance">
               <header>
                   <p>Total</p>
                   <img src={totalSvg} alt="entradas"/>
               </header>
               <strong>R$990.00</strong>
           </div>
       </Container>
    )
}