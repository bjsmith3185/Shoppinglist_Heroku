import { takeLatest, put } from "redux-saga/effects";
import API from "../utils/API";


// opens closes dropdown menu
function* dropDownAsync(data) {
   yield put({ type: "SET_DROPDOWN_MENU", val: data.payload });
}

export function* watchDropdown() {
  yield takeLatest("SHOW_DROPDOWN_MENU", dropDownAsync);
}

//------------------------
// opens closes add new item area
function* addItemAreaAsync(data) {
   yield put({ type: "SHOW_ADD_ITEM_AREA", val: data.payload });
}

export function* watchAddItemArea() {
  yield takeLatest("SHOW_ADD_ITEM", addItemAreaAsync);
}

//------------------------
// opens closes edit item area 
function* editAreaAsync(data) {
   yield put({ type: "SHOW_EDIT_AREA", val: data.payload});
}

export function* watchEditArea() {
  yield takeLatest("SHOW_EDIT", editAreaAsync);
}

//------------------------
// sets myStore from dropdown menu
function* setStoreAsync(data) {
  const myData = yield API.selectStore(data.payload.userId, {
    myStore: data.payload.myStore
  });
  yield put({ type: "SET_STORELIST_COUNT_STORE", val: myData.data });
}

export function* watchSetStore() {
  yield takeLatest("SET_STORE", setStoreAsync);
}

//------------------------
// updating store with value to show update window
function* editAsync(data) {
 yield put({ type: "EDIT_ASYNC", val: data.payload } );
}

export function* watchEdit() {
  yield takeLatest("EDIT", editAsync);
}

//---------------------------------------
//   Adds an item to the shopping collection
function* addItemAsync(data) {
  const myData = yield API.addItem(data.payload.user, data.payload.data);
  myData.data.showAddItemMenu = data.payload.menu.showAddItemMenu;
  yield put({ type: "SET_STORELIST_COUNT_STORE", val: myData.data });
}

export function* watchAddItem() {
  yield takeLatest("ADD_ITEM", addItemAsync);
}

//--------------------------------------------------------
// canceling the edit window
function* cancelUpdateAsync(data) {
 yield put({ type: "EDIT_ASYNC", val: data.payload } );
}

export function* watchCancelUpdate() {
  yield takeLatest("CANCEL_UPDATE", cancelUpdateAsync);
}

//---------------------------------------
// setting data for item to update
function* setUpdateItemAsync(data) {
  yield put({ type: "SET_UPDATE_ITEM_ASYNC", val: data.payload } );
 }
 
 export function* watchSetUpdateItem() {
   yield takeLatest("SET_UPDATE_ITEM", setUpdateItemAsync);
 }

 //---------------------------------------
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
//  update/edit list
function* updateListAsync(data) {
  console.log(data)
  const updated = yield API.updateShoppingList(data.payload.id, data.payload)
 yield put({ type: "SET_STORELIST_COUNT_STORE", val: updated.data } );
}

export function* watchUpdateList() {
  yield takeLatest("UPDATE_LIST", updateListAsync);
}

//---------------------------------------



