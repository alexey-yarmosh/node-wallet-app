const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const router = require('koa-router')();
const serve = require('koa-static');
const logger = require('../libs/logger');
const errorHandler = require('../libs/error-handler');

const getCardsController = require('./controllers/cards/get-cards');
const addCardController = require('./controllers/cards/add-card');
const deleteCardController = require('./controllers/cards/delete-card');
const getTransactionsController = require('./controllers/transactions/get-transactions');
const addTransactionController = require('./controllers/transactions/add-transaction');
const errorController = require('./controllers/error');
const CardsModel = require('./models/cards');
const TransactionsModel = require('./models/transactions');

const app = new Koa();
router.param('id', (id, ctx, next) => next());
router.get('/cards', getCardsController);
router.post('/cards', addCardController);
router.delete('/cards/:id', deleteCardController);
router.get('/cards/:id/transactions', getTransactionsController);
router.post('/cards/:id/transactions', addTransactionController);
router.all('/error', errorController);

app.use(logger);
app.use(errorHandler);
app.use(async (ctx, next) => {
  ctx.cardsModel = new CardsModel();
  ctx.transactionsModel = new TransactionsModel();
  await next();
});
app.use(bodyParser);
app.use(router.routes());
app.use(serve('./public'));

app.listen(3000, () => {
	console.log('Application started');
});
