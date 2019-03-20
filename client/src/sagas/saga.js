
import {delay} from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';

import API from '../utils/API'

// the data paramater should contian the payload from HOME.js
function* addItemAsync(data) {
    // console.log("in the async function")
    // console.log(data)
    // I can probably put my request to teh server here
    // yield delay(4000);

    // send request to client api file
    const myData = yield API.updateShoppingList(data)

//    console.log(myData)
    yield put({type: 'GET_LIST_ASYNC', val: myData.data});

}


export function* watchAddItem() {
    // console.log("in the add_item saga!!!!!!!!!!!!!!!!11")
    yield takeLatest('ADD_ITEM', addItemAsync)
}

//--------------------------------------------------------

function* getListAsync(data) {
    // console.log("in the async function for get all list")
    // console.log(data)
    // I can probably put my request to teh server here
    // yield delay(4000);

    // send request to client api file
    const myData = yield API.getListItems()

//    console.log(myData)
    yield put({type: 'GET_LIST_ASYNC', val: myData.data});

}


export function* watchGetList() {
    // console.log("in the add_item saga!!!!!!!!!!!!!!!!11")
    yield takeLatest('GET_LIST', getListAsync)
}


//--------------------------------------------------------
// Delete item from list

function* deleteItemAsync(data) {
    // console.log("in the async function for deletee item")
    // console.log("is id in here")
    // console.log(data)

    // api call to delte item from mongodb
    // once item is delted, get the updated list info
    // and return that data


    // send request to client api file
    const myData = yield API.deleteItem(data.val)

//    console.log(myData)
    yield put({type: 'GET_LIST_ASYNC', val: myData.data});

}


export function* watchDeleteItem() {
    // console.log("in the add_item saga!!!!!!!!!!!!!!!!11")
    yield takeLatest('DELETE_ITEM', deleteItemAsync)
}

//-------------------------------------------------------------------

// Strike off list

function* checkOffAsync(data) {
    // console.log("in the async function for check off")
    // console.log("is id in here")
    // console.log(data)

    // api call to delte item from mongodb
    // once item is delted, get the updated list info
    // and return that data


    // send request to client api file
    const myData = yield API.checkOff(data.val.id, {strikeThru: data.val.strikeThru})

//    console.log(myData)
    yield put({type: 'GET_LIST_ASYNC', val: myData.data});

}


export function* watchCheckOff() {
    // console.log("in the add_item saga!!!!!!!!!!!!!!!!11")
    yield takeLatest('CHECK_OFF', checkOffAsync)
}

//-------------------------------------------------------------------

















