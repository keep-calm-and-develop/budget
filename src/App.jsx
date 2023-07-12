import { useRef, useState } from 'react';
import { Container } from 'semantic-ui-react';

import { useSelector } from 'react-redux';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EditEntryModal from './components/EditEntryModal';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import { useBalance } from './hooks/useBalance';

function App() {    
    const entries = useSelector((state) => state.entries);
    const { balance, totalExpenses, totalIncome } = useBalance(entries);

    const [isOpen, setIsOpen] = useState(false);
    const currentEntry = useRef(null);

    const openEntryEditModal = (id) => {
        currentEntry.current = entries.find(entry => entry.id === id);
        setIsOpen(true);
    };

    const closeModal = () => {
        currentEntry.current = null;
        setIsOpen(false);
    };

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
                entries={entries}
                openEntryEditModal={openEntryEditModal}
            />
            <MainHeader title={'Add Transaction'} type='h3' />
            <NewEntryForm />
            <EditEntryModal
                entry={currentEntry.current}
                isOpen={isOpen}
                onClose={closeModal}
            />
        </Container>
    );
}

export default App;
