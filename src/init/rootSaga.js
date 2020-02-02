import { put, takeEvery, all } from 'redux-saga/effects'
import {helloSaga} from "../bus/users/saga";

export function* watchIncrementAsync() {
    yield takeEvery("DOWNLOAD_DATA", helloSaga)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ])
}
