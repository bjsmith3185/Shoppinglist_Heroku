
import { createStore, applyMiddleware } from 'redux';


// import reducer from '../reducer/getList';
import setData from '../reducer/reducers';
// Saga
import createSagaMiddleware from 'redux-saga';
import {watchAddItem, watchLoadData, watchDeleteItem, watchStrikeThru, watchSetStore, watchLogIn, watchSignOut} from '../sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(setData, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAddItem);
sagaMiddleware.run(watchLoadData);
sagaMiddleware.run(watchStrikeThru);
sagaMiddleware.run(watchDeleteItem);
sagaMiddleware.run(watchSetStore);
sagaMiddleware.run(watchLogIn);
sagaMiddleware.run(watchSignOut);

export default store;



























