module.exports = async ctx => {
    const cardId = parseInt(ctx.params.id, 10);
    const { amount, phoneNumber } = ctx.request.body;

    await ctx.cardsModel.pay(cardId, parseInt(amount, 10));

    const newTransaction = await ctx.transactionsModel.add({
        type: 'paymentMobile',
        data: {
            phoneNumber
        },
        cardId,
        sum: parseInt(amount, 10)
    });

    ctx.status = 201;
    ctx.body = newTransaction;
};
