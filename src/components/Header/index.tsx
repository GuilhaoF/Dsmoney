

import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles'

//define as propriedades que o header vai receber
interface HeaderProps {
    onOpenNewTransactionModal: () => void//funcao vazia
}

// essa openNewTransaction se tornou uma propriedade que recebe uma funcao via props
export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={Logo} alt="ds money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transacao
                </button>
            </Content>

        </Container>
    )
}