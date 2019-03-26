import { takeLatest, put } from 'redux-saga/effects';
// import * as ROUTES from "../constants/routes";
import API from '../utils/API';
// import { withRouter, history } from 'react-router-dom';




//   Adds an item to the shopping collection
function* addItemAsync(data) {
    // console.log(data)
    const myData = yield API.addItem(data.val.user, data.val.data)
//    console.log(myData)
    yield put({type: 'SET_STORELIST_COUNT_STORE', val: myData.data});
}

export function* watchAddItem() {
    yield takeLatest('ADD_ITEM', addItemAsync)
}

//--------------------------------------------------------
//    Load all data when Home page loads
function* loadDataAsync(data) {
    // console.log(data)
    const myData = yield API.loadData(data.val)
    yield put({type: 'SET_ALL_DATA', val: myData.data});
}

export function* watchLoadData() {
    yield takeLatest('LOAD_DATA', loadDataAsync)
}

//--------------------------------------------------------
//  strike thru list item

function* strikeThruAsync(data) {
    const myData = yield API.strikeThru(data.val.id, {strikeThru: data.val.strikeThru})
    yield put({type: 'SET_STORELIST_COUNT', val: myData.data});
}

export function* watchStrikeThru() {
    yield takeLatest('STRIKE_THRU', strikeThruAsync)
}

//-------------------------------------------------------------------

// delete item

function* deleteItemAsync(data) {
    // console.log("*****")
    // console.log(data.val)
    const myData = yield API.deleteItem(data.val.item, data.val.user)
    yield put({type: 'SET_STORELIST_COUNT_STORE', val: myData.data});
}

export function* watchDeleteItem() {
    yield takeLatest('DELETE_ITEM', deleteItemAsync)
}

//-------------------------------------------------------------------
//  select store
function* setStoreAsync(data) {
    // console.log(data)
    const myData = yield API.selectStore(data.val.userId, {myStore: data.val.myStore})
    yield put({type: 'SET_STORELIST_COUNT_STORE', val: myData.data});
}

export function* watchSetStore() {
    yield takeLatest('SET_STORE', setStoreAsync)
}
//-------------------------------------------------------------------

//   Log in user
function* logInAsync(data) {
    // console.log(data)
    const myData = yield API.logIn(data.val)
//     console.log('back in the saga')
//    console.log(myData)

    yield put({type: 'SET_USERID', val: myData.data});
}

export function* watchLogIn() {
    yield takeLatest('LOG_IN', logInAsync)
}

//--------------------------------------------------------


//   Log out user
function* signOutAsync(data) {

    // No need to go to the server for this one now
    // maybe with a later version

    yield put({type: 'SIGN_OUT', val: data});
}

export function* watchSignOut() {
    yield takeLatest('SIGN_OUT', signOutAsync)
}

//--------------------------------------------------------

// //   Log in user backup
// function* logInAsync(data) {
//     // console.log(data)
//     const myData = yield API.logIn(data.val)
// //     console.log('back in the saga')
// //    console.log(myData)

//     yield put({type: 'SET_ALL_DATA', val: myData.data});
// }

// export function* watchLogIn() {
//     yield takeLatest('LOG_IN', logInAsync)
// }







