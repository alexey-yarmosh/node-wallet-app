import React from 'react';
import { extractCritical } from 'emotion-server';
import { renderToString } from 'react-dom/server';

import { App } from './components';

module.exports = () => {
	const app = renderToString(<App />);
	const { html, css } = extractCritical(app);
	return (
		<html>
			<head>
				<meta charset='utf-8' />
				<title>Node School App</title>
				<link rel='shortcut icon' href='favicon.ico' />
				{<link rel='stylesheet' href='styles.css' />}
				<style type='text/css' dangerouslySetInnerHTML={{__html: css}}>
				</style>
			</head>
			<body>
				<div id='root' dangerouslySetInnerHTML={{__html: html}}>
				</div>
				<script src='bundle.client.js'></script>
			</body>
		</html>
	);
};
