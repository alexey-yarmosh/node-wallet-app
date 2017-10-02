'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const router = require('koa-router')();
const serve = require('koa-static');

const getCardsController = require('./controllers/cards/get-cards');
const deleteCardController = require('./controllers/cards/delete-card');
const errorController = require('./controllers/error');

const CardsModel = require('./models/cards');

const app = new Koa();
router.param('id', (id, ctx, next) => next());

router.get('/cards/', getCardsController);
router.delete('/cards/:id', deleteCardController);
router.all('/error', errorController);

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
app.use(async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = `Error detected: ${err.message}`;
  }
});
app.use(async (ctx, next) => {
  ctx.cardsModel = new CardsModel();
  // await ctx.cardsModel.loadFile();
  await next();
});
app.use(bodyParser);
app.use(router.routes());
app.use(serve('./public'));

app.listen(3000, () => {
	console.log('Application started');
});
