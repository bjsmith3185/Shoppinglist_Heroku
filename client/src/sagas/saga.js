import { takeLatest, put } from "redux-saga/effects";
import API from "../utils/API";

//   Adds an item to the shopping collection
function* addItemAsync(data) {
  const myData = yield API.addItem(data.val.user, data.val.data);
  yield put({ type: "SET_STORELIST_COUNT_STORE", val: myData.data });
}

export function* watchAddItem() {
  yield takeLatest("ADD_ITEM", addItemAsync);
}

//--------------------------------------------------------
//    Load all data when Home page loads
function* loadDataAsync(data) {
  const myData = yield API.loadData(data.payload.id);
  myData.data.signedIn = true;
  myData.data.history = data.payload.history;
  yield put({ type: "SET_ALL_DATA", val: myData.data });
}

export function* watchLoadData() {
  yield takeLatest("LOAD_DATA", loadDataAsync);
}

//--------------------------------------------------------
//  strike thru list item
function* strikeThruAsync(data) {
  const myData = yield API.strikeThru(data.val.id, {
    strikeThru: data.val.strikeThru
  });
  yield put({ type: "SET_STORELIST_COUNT", val: myData.data });
}

export function* watchStrikeThru() {
  yield takeLatest("STRIKE_THRU", strikeThruAsync);
}

//-------------------------------------------------------------------

// delete item
function* deleteItemAsync(data) {
  const myData = yield API.deleteItem(data.val.item, data.val.user);
  yield put({ type: "SET_STORELIST_COUNT_STORE", val: myData.data });
}

export function* watchDeleteItem() {
  yield takeLatest("DELETE_ITEM", deleteItemAsync);
}

//-------------------------------------------------------------------
//  select store
function* setStoreAsync(data) {
  const myData = yield API.selectStore(data.val.userId, {
    myStore: data.val.myStore
  });
  yield put({ type: "SET_STORELIST_COUNT_STORE", val: myData.data });
}

export function* watchSetStore() {
  yield takeLatest("SET_STORE", setStoreAsync);
}
//-------------------------------------------------------------------

//   Log in user
function* logInAsync(data) {
  try {
    let loginInfo = {
      name: data.payload.name,
      password: data.payload.password
    };
    let history = data.payload.history;

    const result = yield API.logIn(loginInfo);
    if (result.data.userId) {
      localStorage.setItem("userId", result.data.userId);
      yield put({ type: "SET_USERID", val: result.data.userId });
      history.push("/home");
    } else {
      console.log("incorrect login");
    }
  } catch (e) {
    console.log("there was an error reaching the server");
    console.log(e);
  }
}

export function* watchLogIn() {
  yield takeLatest("LOG_IN", logInAsync);
}

//--------------------------------------------------------

//   Log out user
function* signOutAsync(data) {
  let history = data.payload.history;
  if (data.payload.userId) {
    localStorage.removeItem("userId");
    history.push("/");
  }
  yield put({ type: "SIGN_OUT_ASYNC", val: data });
}

export function* watchSignOut() {
  yield takeLatest("SIGN_OUT", signOutAsync);
}

//--------------------------------------------------------

//  set history
function* setHistoryAsync(data) {
  yield put({ type: "SET_HISTORY_ASYNC", val: data.payload.history });
}

export function* watchSetHistory() {
  yield takeLatest("SET_HISTORY", setHistoryAsync);
}
//---------------------------------------

// updating store with value to show update window
function* editAsync(data) {
  // // dont need to go to the server here
  // just update the store with a value 
  // to show edit fields
 yield put({ type: "EDIT_ASYNC", val: data.payload } );
}

export function* watchEdit() {
  yield takeLatest("EDIT", editAsync);
}
//---------------------------------------

//  update/edit list
function* updateListAsync(data) {
  const updated = yield API.updateShoppingList(data.val.id, data.val.payload)
 yield put({ type: "SET_STORELIST_COUNT_STORE", val: updated.data } );
}

export function* watchUpdateList() {
  yield takeLatest("UPDATE_LIST", updateListAsync);
}
//---------------------------------------

// canceling the edit window
function* cancelUpdateAsync(data) {
  // // dont need to go to the server here
  // just update the store with a value 
  // to show edit fields
 yield put({ type: "EDIT_ASYNC", val: data.payload } );
}

export function* watchCancelUpdate() {
  yield takeLatest("CANCEL_UPDATE", cancelUpdateAsync);
}
//---------------------------------------

