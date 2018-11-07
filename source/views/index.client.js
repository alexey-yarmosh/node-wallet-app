import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { App } from './components';
import reducers from './reducers';
// import logger from './middlewares/logger';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(create);

const { initData } = window.__data;
const initState = {
  cards: initData.cards,
  transactions: initData.transactions
};
const rootReducer = combineReducers(reducers);

const store = createStoreWithMiddleware(rootReducer, initState);

sagaMiddleware.run(mySaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
