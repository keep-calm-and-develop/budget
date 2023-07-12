import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';
import { testSaga } from '../sagas/testSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const reducers = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
});

const store = createStore(
    reducers,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(testSaga);

export default store;
