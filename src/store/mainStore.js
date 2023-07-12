import { legacy_createStore as createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducer';

const reducers = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
