module.exports = async (ctx) => {
  const transaction = ctx.request.body;
  transaction.cardId = Number(ctx.params.id);
  const newTransaction = await ctx.transactionsModel.add(transaction);
  ctx.status = 201;
  ctx.body = newTransaction;
};
