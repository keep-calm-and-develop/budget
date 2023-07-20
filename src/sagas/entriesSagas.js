import { call, put, take } from 'redux-saga/effects';
import entriesTypes, { populateEntries } from '../actions/entries.actions';
import axios from 'axios';

export function* getAllEntries() {
    try {
        const { data: entries } = yield call(axios, 'http://localhost:3001/entries');
        yield put(populateEntries(entries));
    } catch (error) {
        console.log(error);
    }
}

export function* watchGetAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    yield call(getAllEntries);
}