import { Container } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

import './App.css';

function App() {
    return (
        <Container>
            <MainHeader title={'Budget'} type='h1' />
            <DisplayBalance
                title='Your Balance'
                value='2500.50'
                size='small'
            />
            <DisplayBalances />
            <MainHeader title={'Transaction History'} type='h3' />
            <EntryLine
                description={'Zomato'}
                value={100}
                isExpense
            />
            <EntryLine
                description={'Grocery'}
                value={800}
                isExpense
            />
            <EntryLine
                description={'Salary'}
                value={3000}
            />
            <EntryLine
                description={'Cab'}
                value={250}
                isExpense
            />
            <MainHeader title={'Add Transaction'} type='h3' />
            <NewEntryForm />
        </Container>
    );
}

export default App;
