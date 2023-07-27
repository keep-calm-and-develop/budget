import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions';

function* deleteEntry({ payload: id }) {
    yield put({ type: entriesTypes.REMOVE_ENTRY_RESULT, payload: id });
    yield call(axios.delete, `http://localhost:3001/entries/${id}`);
    yield call(axios.delete, `http://localhost:3001/values/${id}`);
}

export function* deleteEntrySaga() {
    yield takeLatest(entriesTypes.REMOVE_ENTRY, deleteEntry);
}