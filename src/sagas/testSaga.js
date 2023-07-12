import { delay } from 'redux-saga/effects';

export function* testSaga() {
    yield delay(1000);
    console.log('First Saga');
}

export function* count() {
    yield 1;
    yield 11;
    yield 12;
    yield 13;
    yield 14;
    yield 15;
}