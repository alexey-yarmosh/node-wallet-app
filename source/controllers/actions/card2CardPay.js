module.exports = async ctx => {
    const cardId = parseInt(ctx.params.id, 10);
    const sum = parseInt(ctx.request.body.sum, 10);
    const targetCardId = parseInt(ctx.request.body.targetCardId, 10);

    await ctx.cardsModel.pay(cardId, sum);
    await ctx.cardsModel.earn(targetCardId, sum);

    const { cardNumber } = await ctx.cardsModel.get(cardId);
    const { cardNumber: targetCardNumber } = await ctx.cardsModel.get(targetCardId);

    const newTransaction = await ctx.transactionsModel.add({
        type: 'withdrawCard',
        data: targetCardNumber,
        cardId,
        sum: -sum
    });

    await ctx.transactionsModel.add({
        type: 'prepaidCard',
        data: cardNumber,
        cardId: targetCardId,
        sum
    });

    ctx.status = 201;
    ctx.body = newTransaction;
};
