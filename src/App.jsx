import { Container } from 'semantic-ui-react';

import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EditEntryModal from './components/EditEntryModal';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import { useBalance } from './hooks/useBalance';
import useEntryDetails from './hooks/useEntryDetails';

function App() {    
    const { isOpen, currentEntry, openEntryEditModal, closeModal } = useEntryDetails();
    const { balance, totalExpenses, totalIncome } = useBalance();

    return (
        <Container>
            <MainHeader title={'Budget'} type='h1' />
            <DisplayBalance
                title='Your Balance'
                value={balance}
                size='small'
            />
            <DisplayBalances totalExpenses={totalExpenses} totalIncome={totalIncome} />
            <MainHeader title={'Transaction History'} type='h3' />
            <EntryLines
                openEntryEditModal={openEntryEditModal}
            />
            <MainHeader title={'Add Transaction'} type='h3' />
            <NewEntryForm />
            <EditEntryModal
                entry={currentEntry}
                isOpen={isOpen}
                onClose={closeModal}
            />
        </Container>
    );
}

export default App;
