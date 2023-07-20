import { take, put, delay, call } from 'redux-saga/effects';

function double(number) {
    return number * 2;
}

export function* testSaga() {
    while (true) {
        console.log('[testSaga] start');
        const action = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        console.log('[testSaga] a', a);
        const b = yield double(3);
        console.log('[testSaga] b', b);
        console.log('[testSaga] finish', action);
    }
}

export function* dispatchTest() {
    while (true) {
        yield delay(1000);
        yield put({ type: 'TEST_MESSAGE', payload: 1000 });
    }
}