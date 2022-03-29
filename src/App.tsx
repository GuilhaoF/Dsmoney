import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  //funcao para abrir o modal 
  //essa funcao e' passada via props para o botao que esta no header
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)//seta modal como true , o abrindo
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  return (
    //passando provider para os componentes
    // tem que ser passado um value
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}  /> 
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}

