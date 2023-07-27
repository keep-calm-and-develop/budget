import axios from 'axios';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import entriesTypes, { populateEntries, putEntryDetails } from '../actions/entries.actions';

function* getAllEntries() {
    try {
        const { data: entries } = yield call(axios, 'http://localhost:3001/entries');
        yield put(populateEntries(entries));
    } catch (error) {
        console.log(error);
    }
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id);
        
    }
}

function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
    yield put(putEntryDetails(id, data));
}

export function* watchGetAllEntries() {
    yield takeLatest(entriesTypes.GET_ENTRIES, getAllEntries);
}

