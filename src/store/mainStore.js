import { configureStore, combineReducers } from '@reduxjs/toolkit';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';
import initSagas from '../sagas';

const reducers = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
});

initSagas(sagaMiddleware);

export default store;
