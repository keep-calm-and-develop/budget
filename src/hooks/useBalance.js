import { useMemo } from 'react';

export const useBalance = (entries) => {
    const {
        expense: totalExpenses, income: totalIncome,
    } = useMemo(() => {
        return entries.reduce((acc, entry) => {
            if (entry.isExpense) {
                return {
                    expense: acc.expense + parseFloat(entry.value),
                    income: acc.income,
                };
            } else {
                return {
                    income: acc.income + parseFloat(entry.value),
                    expense: acc.expense,
                };
            }
        }, { income: 0, expense: 0 });
    }, [entries]);


    return {
        totalIncome,
        totalExpenses,
        balance: totalIncome - totalExpenses,
    };
};
