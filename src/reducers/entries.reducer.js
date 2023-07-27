import entriesTypes from '../actions/entries.actions';

export const initialEntries = [];

const entriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
        case entriesTypes.PUT_ENTRY_DETAILS: {
            const { id, entry: { value, isExpense } } = action.payload;
            const newEntries = state.map((entry) => {
                if (entry.id === id) {
                    return {
                        description: entry.description,
                        value,
                        isExpense,
                        id,
                    };
                }
                return entry;
            });
            return newEntries;
        }
        case entriesTypes.POPULATE_ENTRIES: {
            return action.payload;
        }
        case entriesTypes.ADD_ENTRY_RESULT: {
            const newEntries = state.concat({ ...action.payload });
            return newEntries;
        }
        case entriesTypes.REMOVE_ENTRY_RESULT: {
            const newEntries = state.filter(entry => entry.id !== action.payload);
            return newEntries;
        }
        case entriesTypes.UPDATE_ENTRY_RESULT: {
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
