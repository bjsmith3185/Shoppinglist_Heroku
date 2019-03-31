import { createStore, applyMiddleware } from "redux";
import setData from "../reducer/reducers";
// Saga
import createSagaMiddleware from "redux-saga";
import {
  watchDropdown,
  watchAddItemArea,
  watchEditArea,
  watchAddItem,
  watchLoadData,
  watchDeleteItem,
  watchStrikeThru,
  watchSetStore,
  watchLogIn,
  watchSignOut,
  watchSetHistory,
  watchEdit,
  watchUpdateList,
  watchCancelUpdate,
  watchSetUpdateItem
} from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(setData, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchDropdown);
sagaMiddleware.run(watchAddItemArea);
sagaMiddleware.run(watchEditArea);
sagaMiddleware.run(watchSetUpdateItem);
sagaMiddleware.run(watchAddItem);
sagaMiddleware.run(watchLoadData);
sagaMiddleware.run(watchStrikeThru);
sagaMiddleware.run(watchDeleteItem);
sagaMiddleware.run(watchSetStore);
sagaMiddleware.run(watchLogIn);
sagaMiddleware.run(watchSignOut);
sagaMiddleware.run(watchSetHistory);
sagaMiddleware.run(watchEdit);
sagaMiddleware.run(watchUpdateList);
sagaMiddleware.run(watchCancelUpdate);

export default store;
