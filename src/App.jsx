import { Container } from 'semantic-ui-react';

import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EditEntryModal from './components/EditEntryModal';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import { useBalance } from './hooks/useBalance';

function App() {    
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
            <EntryLines/>
            <MainHeader title={'Add Transaction'} type='h3' />
            <NewEntryForm />
            <EditEntryModal />
        </Container>
    );
}

export default App;
