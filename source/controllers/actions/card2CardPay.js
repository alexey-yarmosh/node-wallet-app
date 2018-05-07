module.exports = async ctx => {
  const cardId = parseInt(ctx.params.id, 10);
  const sum = parseInt(ctx.request.body.sum, 10);
  const toId = parseInt(ctx.request.body.toId, 10);

  if (!cardId || !toId || !sum || sum <= 0) {
    ctx.status = 400;
    ctx.body = `Bad request:\n cardId: ${cardId},\n toId: ${toId},\n sum: ${sum}`;
    return;
  }

  await ctx.cardsModel.pay(cardId, sum);
  await ctx.cardsModel.earn(toId, sum);

  const { cardNumber } = await ctx.cardsModel.get(cardId);
  const { cardNumber: targetCardNumber } = await ctx.cardsModel.get(toId);

  await ctx.transactionsModel.add({
    type: 'withdrawCard',
    data: targetCardNumber,
    cardId,
    sum: -sum
  });

  const newTransaction = await ctx.transactionsModel.add({
    type: 'prepaidCard',
    data: cardNumber,
    cardId: toId,
    sum
  });

  ctx.status = 201;
  ctx.body = newTransaction;
};
