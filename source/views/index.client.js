import React from 'react';
import { hydrate as hydrateReact } from 'react-dom';
import { hydrate as hydrateEmotion } from 'emotion';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { App } from './components';
import reducers from './reducers';
import logger from './middlewares/logger';

const { ids, initData } = window.__data;
const initState = {
  cards: initData.cards,
  transactions: initData.transactions
};

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  initState,
  // applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

hydrateEmotion(ids);
hydrateReact(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
