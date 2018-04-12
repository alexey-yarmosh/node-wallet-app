const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const router = require('koa-router')();
const serve = require('koa-static');
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

const app = new Koa();

function getView(viewId) {
	const viewPath = path.resolve(__dirname, 'views', `${viewId}.server.js`);
	return require(viewPath);
}

async function getData(ctx) {
	const user = {
		login: 'samuel_johnson',
		name: 'Samuel Johnson'
	};
	const cards = await ctx.cardsModel.getAll();
	const transactions = await ctx.transactionsModel.getAll();

	return {
		user,
		cards,
		transactions
	};
}

// Сохраним параметр id в ctx.params.id
router.param('id', (id, ctx, next) => next());
router.get('/', async ctx => {
	const data = await getData(ctx);
	const indexView = getView('bundle');
	const indexViewHtml = renderToStaticMarkup(indexView(data));
	ctx.body = indexViewHtml;
});

router.get('/cards', getCardsController);
router.post('/cards', addCardController);
router.delete('/cards/:id', deleteCardController);
router.get('/cards/:id/transactions', getTransactionsController);
router.post('/cards/:id/transactions', addTransactionController);
router.post('/cards/:id/mobilePay', mobilePayController);
router.post('/cards/:id/card2CardPay', card2CardPayController);
router.all('/error', errorHandler);

// Getting resources speed
app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	logger.log('info', `${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(errorHandler);
app.use(async (ctx, next) => {
	ctx.cardsModel = new CardsModel();
	ctx.transactionsModel = new TransactionsModel();
	await ctx.cardsModel.getAll();
	await ctx.transactionsModel.getAll();

  await next();
});
app.use(bodyParser);
app.use(router.routes());
app.use(serve('./public'));

app.listen(3000, () => {
	logger.log('info', 'Application started on 3000');
});
