const CardsModel = require('source/models/cards');

module.exports = async (ctx) => {
  ctx.body = await ctx.cardsModel.getAll();
};
