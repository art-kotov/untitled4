import { put, takeEvery } from 'redux-saga/effects'
import {changeStatus, setUsers} from "../reducer";
import {ax} from "../../../services";
import {call} from "redux-saga/effects"
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    yield delay(1000);
    const {data} = yield call(ax.get,"users");
    console.log(data)
    yield put(setUsers(data))
    yield put(changeStatus())
}
