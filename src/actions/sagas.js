import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

const runOurAction = function* () {
    let remoteData;
    yield axios.get('https://httpbin.org/json').then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_data", payload: remoteData });
}
const runPostAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('http://172.21.0.1:8000/car-type',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    // console.log(remoteData);
    yield put({ type: "Set_data", payload: remoteData });
}
function* getAsyncDataWatcher() {
    yield takeLatest('Get_async_data', runOurAction)
}

function* postAsyncDataWatcher() {
    yield takeLatest('Post_async_data', runPostAction)
}

export default function* rootSaga() {
    yield all([getAsyncDataWatcher(),postAsyncDataWatcher()]);
}