import {
    fork,
    take
} from 'redux-saga/effects';
import test1Saga from '../controllers/Test/Test1/sagas.js';
export default function* mainSaga() {
    yield fork(test1Saga);
}