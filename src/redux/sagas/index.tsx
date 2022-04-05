import {all, fork} from 'redux-saga/effects';
import apisSagas from './apisSagas';

const forkList = (sagasList: any) => sagasList.map((saga: any) => fork(saga));

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([...forkList(apisSagas)]);
}
