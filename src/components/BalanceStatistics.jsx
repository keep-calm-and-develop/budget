import DisplayBalance from './DisplayBalance';
import DisplayTotals from './DisplayTotals';
import { useBalanceDetails } from '../hooks/useBalanceDetails';

const BalanceStatistics = () => {
    const { balance, totalExpenses, totalIncome } = useBalanceDetails();
    return (
        <>
            <DisplayBalance
                title='Your Balance'
                value={balance}
                size='small'
            />
            <DisplayTotals totalExpenses={totalExpenses} totalIncome={totalIncome} />
        </>
    );
};

export default BalanceStatistics;