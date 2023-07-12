
const initialState = {
    editEntryID: null,
};

const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_EDIT_MODAL': {
            return { ...state, editEntryID: action.payload };
        }
        case 'CLOSE_EDIT_MODAL': {
            return { ...state, editEntryID: null };
        }
        default:
            return state;
    }
};

export default modalsReducer;
