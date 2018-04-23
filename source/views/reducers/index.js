import prepaidReducer from './prepaid';

const rootCardId = (rootCardId = 1, action) => {
  switch (action.type) {
    case 'SWITCH_ROOT_CARD':
      return action.id;
    default:
      return rootCardId;
  }
};

const cards = (cards = [], action) => {
  return cards;
};

const transactions = (transactions = [], action) => {
  return transactions;
};

export default {
  rootCardId,
  prepaidData: prepaidReducer,
  cards,
  transactions
};
