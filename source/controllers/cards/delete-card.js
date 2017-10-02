const CardsModel = require('source/models/cards');

module.exports = async (ctx) => {
  const id = Number(ctx.params.id);
  await ctx.cardsModel.delete(id);
  ctx.status = 200;
};
