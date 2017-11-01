module.exports = async ctx => {
  const card = ctx.request.body;

  const isDataValid = (
    card &&
    card.hasOwnProperty('cardNumber') &&
    card.hasOwnProperty('balance')
  );

  if (!isDataValid) {
    throw new ApplicationError('Card data is invalid', 400);
  }

  const newCard = await ctx.cardsModel.add(card);
  ctx.status = 201;
  ctx.body = newCard;
};
