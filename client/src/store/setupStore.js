
import { createStore, applyMiddleware, compose } from 'redux';


// import reducer from '../reducer/getList';
import reducer from '../reducer/getList';
// Saga
import createSagaMiddleware from 'redux-saga';
import {watchAddItem, watchGetList, watchDeleteItem, watchCheckOff} from '../sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAddItem);
sagaMiddleware.run(watchGetList);
sagaMiddleware.run(watchDeleteItem);
sagaMiddleware.run(watchCheckOff);



export default store;



























