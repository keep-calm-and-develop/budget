import modalsTypes from '../actions/modals.actions';

const initialState = {
    editEntryID: null,
};

const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case modalsTypes.OPEN_EDIT_MODAL: {
            return { ...state, editEntryID: action.payload };
        }
        case modalsTypes.CLOSE_EDIT_MODAL: {
            return { ...state, editEntryID: null };
        }
        default:
            return state;
    }
};

export default modalsReducer;
