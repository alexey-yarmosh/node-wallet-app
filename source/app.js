const express = require('express');
const path = require('path');
const { renderToStaticMarkup } = require('react-dom/server');
const logger = require('../libs/logger')('wallet-app');
const errorHandler = require('../libs/error-handler');

const getCardsController = require('./controllers/cards/get-cards');
const addCardController = require('./controllers/cards/add-card');
const deleteCardController = require('./controllers/cards/delete-card');
const getTransactionsController = require('./controllers/transactions/get-transactions');
const addTransactionController = require('./controllers/transactions/add-transaction');
const mobilePayController = require('./controllers/actions/mobilePay');
const card2CardPayController = require('./controllers/actions/card2CardPay');
const CardsModel = require('./models/cards');
const TransactionsModel = require('./models/transactions');

const app = express();
app.param('id', (id, ctx, next) => next());
app.get('/cards', getCardsController);
app.post('/cards', addCardController);
app.delete('/cards/:id', deleteCardController);
app.get('/cards/:id/transactions', getTransactionsController);
app.post('/cards/:id/transactions', addTransactionController);
app.post('/cards/:id/mobilePay', mobilePayController);
app.post('/cards/:id/card2CardPay', card2CardPayController);
app.all('/error', errorHandler);

function getView(viewId) {
	const viewPath = path.resolve(__dirname, 'views', `${viewId}.server.js`);
	return require(viewPath);
}

app.get('/', (req, res) => {
	const indexView = getView('bundle');
	const indexViewHtml = renderToStaticMarkup(indexView());
	res.send(indexViewHtml);
});

// Getting resources speed
// app.use(async (ctx, next) => {
// 	const start = new Date();
// 	await next();
// 	const ms = new Date() - start;
// 	logger.log('info', `${ctx.method} ${ctx.url} - ${ms}ms`);
// });

app.use((req, res, next) => {
	const start = new Date();
	Promise.resolve()
	.then(() => {
		next();
	})
	.then((data) => {
		const ms = new Date() - start;
		logger.log('info', `${req.method} ${req.url} - ${ms}ms`);
	});
});

// app.use(errorHandler);

// app.use(async (ctx, next) => {
//   ctx.cardsModel = new CardsModel();
//   ctx.transactionsModel = new TransactionsModel();
//   await next();
// });

express.json();
app.use(express.static('./public'));

app.listen(3000, () => {
	logger.log('info', 'Application started');
});
