import { rootCardId, cards, transactions } from './root';
import prepaidReducer from './prepaid';

export default {
  rootCardId,
  prepaidData: prepaidReducer,
  cards,
  transactions
};
