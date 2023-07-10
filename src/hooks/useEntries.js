import { useState } from 'react';

const initialEntries = [
    {
        id: 1,
        description: 'Zomato',
        value: 130,
        isExpense: true,
    }, {
        id: 2,
        description: 'Salary',
        value: 3050,
        isExpense: false,
    }, {
        id: 3,
        description: 'Cab',
        value: 231,
        isExpense: true,
    }, {
        id: 4,
        description: 'Grocery',
        value: 864,
        isExpense: true,
    },
];
export const useEntries = () => {
    const [entries, setEntries] = useState(initialEntries);

    const deleteEntry = (id) => {
        const result = entries.filter(entry => entry.id !== id);
        setEntries(result);
    };

    const addEntry = ({ description, value, isExpense }) => {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense,
        });
        setEntries(result);
    };

    const updateEntry = ({ description, value, isExpense, id }) => {
        const result = entries.map((entry) => {
            if (entry.id === id) {
                return {
                    description,
                    value,
                    isExpense,
                    id,
                };
            }
            return entry;
        });

        setEntries(result);
    };
    return {
        entries,
        updateEntries: setEntries,
        deleteEntry,
        addEntry,
        updateEntry,
    };
};
