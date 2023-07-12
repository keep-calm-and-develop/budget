export const initialEntries = [
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

const entriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
        case 'ADD_ENTRY': {
            const newEntries = state.concat({ ...action.payload });
            return newEntries;
        }
        case 'REMOVE_ENTRY': {
            const newEntries = state.filter(entry => entry.id !== action.payload);
            return newEntries;
        }
        case 'UPDATE_ENTRY': {
            const { id, description, value, isExpense } = action.payload;
            const newEntries = state.map((entry) => {
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
            return newEntries;
        }
        default:
            return state;
    }
};

export default entriesReducer;
