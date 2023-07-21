import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import entriesTypes, { populateEntries } from '../actions/entries.actions';

function* getAllEntries() {
    try {
        const { data: entries } = yield call(axios, 'http://localhost:3001/entries');
        yield put(populateEntries(entries));
    } catch (error) {
        console.log(error);
    }
}

export function* watchGetAllEntries() {
    yield takeEvery(entriesTypes.GET_ENTRIES, getAllEntries);
}