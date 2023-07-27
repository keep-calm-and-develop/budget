import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions';

export function* updateEntry({ payload }) {
    const { id, description, value, isExpense } = payload;
    yield call(axios.put, `http://localhost:3001/entries/${id}`, {
        description,
    });
    yield call(axios.put, `http://localhost:3001/values/${id}`, {
        isExpense, value,
    });
    yield put({ type: entriesTypes.UPDATE_ENTRY_RESULT, payload });
}

export function* updateEntrySaga() {
    yield takeLatest(entriesTypes.UPDATE_ENTRY, updateEntry);
}