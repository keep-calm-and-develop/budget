import { legacy_createStore as createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries.reducer';

const reducers = combineReducers({
    entries: entriesReducer,
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
