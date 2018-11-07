import React from 'react'
import serialize from 'serialize-javascript'

module.exports = initData => {
	const viewData = `window.__data=${serialize({ initData })};`
	return (
		<html lang='ru'>
			<head>
				<meta charSet='utf-8' />
				<title>Node Wallet App</title>
				<link rel='shortcut icon' href='favicon.ico' />
				<link rel='stylesheet' href='styles.css' />
			</head>
			<body>
				<div id='root' />
				<script dangerouslySetInnerHTML={{ __html: viewData }} />
				<script src='bundle.client.js' />
			</body>
		</html>
	)
}
