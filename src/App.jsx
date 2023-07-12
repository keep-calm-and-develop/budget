import { Container } from 'semantic-ui-react';

import './App.css';
import BalanceStatistics from './components/BalanceStatistics';
import EditEntryModal from './components/EditEntryModal';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {    
    return (
        <Container>
            <MainHeader title={'Budget'} type='h1' />
            <BalanceStatistics/>
            <MainHeader title={'Transaction History'} type='h3' />
            <EntryLines/>
            <MainHeader title={'Add Transaction'} type='h3' />
            <NewEntryForm />
            <EditEntryModal />
        </Container>
    );
}

export default App;
