
const types = {
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    PUT_ENTRY_DETAILS: 'PUT_ENTRY_DETAILS',
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
    ADD_ENTRY_RESULT: 'ADD_ENTRY_RESULT',
    UPDATE_ENTRY_RESULT: 'UPDATE_ENTRY_RESULT',
};

export default types;

export const putEntryDetails = (id, entry) => {
    return ({ type: types.PUT_ENTRY_DETAILS, payload: { id, entry } });
}

export const populateEntries = (entries) => {
    return ({ type: types.POPULATE_ENTRIES, payload: entries });
}

export const getAllEntries = () => {
    return ({ type: types.GET_ENTRIES });
};

export const addEntryAction = (newEntry) => {
    return ({ type: types.ADD_ENTRY, payload: newEntry });
};

export const removeEntryAction = (entryId) => {
    return ({ type: types.REMOVE_ENTRY, payload: entryId });
};

export const updateEntryAction = (updatedEntry) => {
    return ({ type: types.UPDATE_ENTRY, payload: updatedEntry });
};
