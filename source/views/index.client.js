import React from 'react';
import { hydrate as hydrateReact } from 'react-dom';
import { hydrate as hydrateEmotion } from 'emotion';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { App } from './components';
import reducers from './reducers';

const { ids, initData } = window.__data;
const initState = {
  cards: initData.cards,
  transactions: initData.transactions
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, initState);

hydrateEmotion(ids);
hydrateReact(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
