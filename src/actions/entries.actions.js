
const types = {
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
};

export default types;

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
