import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Container } from 'semantic-ui-react';
import { getAllEntries } from './actions/entries.actions';
import BalanceStatistics from './components/BalanceStatistics';
import EditEntryModal from './components/EditEntryModal';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

const MainApp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllEntries());
    }, [dispatch]);
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
};

export default MainApp;