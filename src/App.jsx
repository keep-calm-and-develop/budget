import { useRef, useState } from 'react';
import { Container } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

import './App.css';
import EditEntryModal from './components/EditEntryModal';
import { useBalance } from './hooks/useBalance';
import { useEntries } from './hooks/useEntries';

function App() {
    const { entries, deleteEntry, addEntry, updateEntry } = useEntries();

    const { balance, totalExpenses, totalIncome } = useBalance(entries);

    const [isOpen, setIsOpen] = useState(false);
    const currentEntry = useRef(null);
    const openEntryEditModal = (id) => {
        currentEntry.current = entries.find(entry => entry.id === id);
        setIsOpen(true);
    };

    const closeModal = () => {
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
                deleteEntry={deleteEntry}
                openEntryEditModal={openEntryEditModal}
            />
            <MainHeader title={'Add Transaction'} type='h3' />
            <NewEntryForm addEntry={addEntry} />
            <EditEntryModal
                entry={currentEntry.current}
                isOpen={isOpen}
                onClose={closeModal}
                onSave={updateEntry}
            />
        </Container>
    );
}

export default App;
