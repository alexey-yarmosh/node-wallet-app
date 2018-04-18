import React from 'react';
import { extractCritical } from 'emotion-server';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { App } from './components';
import reducers from './reducers';

module.exports = initData => {
	const initState = {
		cards: initData.cards,
		transactions: initData.transactions
	};

	const rootReducer = combineReducers(reducers);
	const store = createStore(rootReducer, initState);

	const app = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	);

	const { html, ids, css } = extractCritical(app);
	const viewData = `window.__data=${serialize({ ids, initData })};`;
	return (
		<html lang='ru'>
			<head>
				<meta charSet='utf-8' />
				<title>Node Wallet App</title>
				<link rel='shortcut icon' href='favicon.ico' />
				<link rel='stylesheet' href='styles.css' />
				<style type='text/css' dangerouslySetInnerHTML={{ __html: css }} />
			</head>
			<body>
				<div id='root' dangerouslySetInnerHTML={{ __html: html }} />
				<script dangerouslySetInnerHTML={{ __html: viewData }} />
				<script src='bundle.client.js' />
			</body>
		</html>
	);
};
