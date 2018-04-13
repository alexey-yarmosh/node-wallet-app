import React from 'react';
import { extractCritical } from 'emotion-server';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

import { App } from './components';

module.exports = appData => {
	const app = renderToString(<App data={appData} />);
	const { html, ids, css } = extractCritical(app);
	const viewData = `window.__data=${serialize({ ids, appData })};`;
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
