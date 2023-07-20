import * as entriesSaga from './entriesSagas';

function initSagas(sagaMiddleware) {
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

export default initSagas;
