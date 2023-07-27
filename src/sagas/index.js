import * as entriesSaga from './entriesSagas';
import * as entriesSagaAdd from './entriesSagaAdd';
import * as entriesSagaDeletion from './entriesSagaDeletion';
import * as entriesSagaModification from './entriesSagaModification';

function initSagas(sagaMiddleware) {
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaModification).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

export default initSagas;
