
const addEntryAction = (newEntry) => {
    return ({ type: 'ADD_ENTRY', payload: newEntry });
};

const removeEntryAction = (entryId) => {
    return ({ type: 'REMOVE_ENTRY', payload: entryId });
};

const updateEntryAction = (updatedEntry) => {
    return ({ type: 'UPDATE_ENTRY', payload: updatedEntry });
};

export {
    addEntryAction,
    removeEntryAction,
    updateEntryAction,
};