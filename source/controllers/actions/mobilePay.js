module.exports = async ctx => {
    const id = Number(ctx.params.id);
    const sum = Number(ctx.request.body.amount);

    await ctx.cardsModel.pay(id, sum);

    const transaction = {
        type: 'paymentMobile',
        data: '+7(921)3333333',
        cardId: id,
        sum,
        cardNumber: '546925000000000'
    };

    const newTransaction = await ctx.transactionsModel.add(transaction);
    ctx.status = 201;
    ctx.body = newTransaction;
};
