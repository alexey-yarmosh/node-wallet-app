const { COMISSION } = require('../../constants');

module.exports = async ctx => {
  const cardId = parseInt(ctx.params.id, 10);
  const { sum, data } = ctx.request.body;
  const resultSum = parseInt(sum, 10) + COMISSION;

  if (!cardId || !sum || sum <= 0) {
    ctx.status = 400;
    ctx.body = `Bad request:\n cardId: ${cardId},\n sum: ${sum}`;
    return;
  }

  await ctx.cardsModel.pay(cardId, resultSum);

  const newTransaction = await ctx.transactionsModel.add({
    type: 'paymentMobile',
    data,
    cardId,
    sum: resultSum
  });

  ctx.status = 201;
  ctx.body = newTransaction;
};
