const COMISSION = 3;

module.exports = async ctx => {
    const cardId = parseInt(ctx.params.id, 10);
    const { amount, phoneNumber } = ctx.request.body;
    const resultAmount = parseInt(amount, 10) + COMISSION;

    await ctx.cardsModel.pay(cardId, resultAmount);

    const newTransaction = await ctx.transactionsModel.add({
        type: 'paymentMobile',
        data: {
            phoneNumber
        },
        cardId,
        sum: resultAmount
    });

    ctx.status = 201;
    ctx.body = newTransaction;
};
