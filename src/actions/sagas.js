import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
const runOurAction = function* () {
    let remoteData;
    yield axios.get('https://httpbin.org/json').then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_data", payload: remoteData });
}
function* getAsyncDataWatcher() {
    yield takeLatest('Get_async_data', runOurAction)
}
export default function* rootSaga() {
    yield all([getAsyncDataWatcher()]);
}