import { configureStore, combineReducers } from '@reduxjs/toolkit';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';
import { watchGetAllEntries as entriesSaga } from '../sagas/entriesSagas';

const reducers = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(entriesSaga);

export default store;
