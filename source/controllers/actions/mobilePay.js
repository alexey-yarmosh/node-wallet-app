const COMISSION = 3;

module.exports = async ctx => {
    const cardId = parseInt(ctx.params.id, 10);
    const { sum, data } = ctx.request.body;
    const resultSum = parseInt(sum, 10) + COMISSION;

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
