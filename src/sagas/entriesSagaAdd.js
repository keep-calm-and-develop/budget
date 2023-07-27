import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions';

export function* addEntry({ payload }) {
    const { id, description, value, isExpense } = payload;
    yield call(axios.post, `http://localhost:3001/entries/`, {
        id, description,
    });
    yield call(axios.post, `http://localhost:3001/values/`, {
        id, isExpense, value,
    });
    yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload });
}

export function* addEntrySaga() {
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntry);
}