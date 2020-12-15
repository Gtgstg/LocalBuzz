import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

const runOurAction = function* (action) {
    let remoteData;
    let params={
        'data':action.payload
    };
    yield axios.post('https://localbuzz247.herokuapp.com/groups',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
        // console.log(remoteData);
    });
    // console.log(remoteData);
    yield put({ type: "Set_data", payload: remoteData });
}

const signup = function* (action) {
    let remoteData;
    let params={
        'data':action.payload
    };
    yield axios.post('https://localbuzz247.herokuapp.com/signup',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
        // console.log(remoteData);
    });
    // console.log(remoteData);
    yield put({ type: "Set_user", payload: remoteData });
}

const runGetUsersAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/groupuser',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_groupuser", payload: remoteData });
}

const runOurUserAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/curruser',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_user", payload: remoteData });
    // return remoteData;
}

const editAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/edit',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_user", payload: remoteData });
    // return remoteData;
}

const comingAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/coming',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_coming", payload: remoteData });
    // return remoteData;
}

const suggestAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/suggest',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_suggest", payload: remoteData });
    // return remoteData;
}

const runSendMailAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/send',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_mail", payload: remoteData });
}

const runLeaveAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/leave',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    yield put({ type: "Set_data", payload: remoteData });
}

const runPostAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/car-type',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    // console.log(remoteData);
    yield put({ type: "Set_res", payload: remoteData });
}

const runPostCreateAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/create-group',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    // console.log(remoteData);
    yield put({ type: "Set_res", payload: remoteData });
}

const runPostAddAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/groupTag',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    // console.log(remoteData);
    yield put({ type: "chatTag", payload: remoteData });
}

const runAcceptAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/accept',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    console.log(remoteData);
    yield put({ type: "set_accept", payload: remoteData });
}

const runSkipAction = function* (action) {
    let params={
        'data':action.payload
    };
    let remoteData;
    yield axios.post('https://localbuzz247.herokuapp.com/skip',params,headers={'Content-Type': 'application/json'}).then((res) => {
        remoteData = res.data;
    });
    // console.log(remoteData);
    yield put({ type: "set_accept", payload: remoteData });
}

function* getAsyncDataWatcher() {
    yield takeLatest('Get_async_data', runOurAction)
}

function* sendMailWatcher() {
    yield takeLatest('Send_Mail', runSendMailAction)
}

function* leaveWatcher() {
    yield takeLatest('Leave', runLeaveAction)
}

function* signUpWatcher() {
    yield takeLatest('Sign_Up', signup)
}

function* getUsersWatcher() {
    yield takeLatest('Get_users', runGetUsersAction)
}

function* editWatcher() {
    yield takeLatest('edit', editAction)
}

function* getAsyncUserWatcher() {
    yield takeLatest('Get_async_user', runOurUserAction)
}

function* suggest() {
    yield takeLatest('suggest', suggestAction)
}

function* coming() {
    yield takeLatest('coming', comingAction)
}

function* postAsyncDataWatcher() {
    yield takeLatest('Post_async_data', runPostAction)
}

function* postAsyncCreateDataWatcher() {
    yield takeLatest('Post_async_create_group', runPostCreateAction)
}

function* postAsyncAddDataWatcher() {
    yield takeLatest('Post_async_add_user', runPostAddAction)
}

function* acceptWatcher() {
    yield takeLatest('accept', runAcceptAction)
}

function* skipWatcher() {
    yield takeLatest('skip', runSkipAction)
}

export default function* rootSaga() {
    yield all([editWatcher(),coming(),suggest(),leaveWatcher(),acceptWatcher(),skipWatcher(),sendMailWatcher(),getUsersWatcher() ,signUpWatcher(),getAsyncDataWatcher(),getAsyncUserWatcher(),postAsyncDataWatcher(),postAsyncCreateDataWatcher(),postAsyncAddDataWatcher()]);
}