const rootCardId = (rootCardId = 1, action) => {
  switch (action.type) {
    case 'SWITCH_CARD':
      return action.id;
    default:
      return rootCardId;
  }
}

const cards = (cards = [], action) => {
  return cards;
};

const transactions = (transactions = [], action) => {
  return transactions;
};

export default {
  rootCardId,
  cards,
  transactions
};
