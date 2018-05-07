import { takeEvery, call, put, select } from 'redux-saga/effects';
import { card2CardSubmit } from '../utils';

function* card2CardPay(action) {
  const state = yield select();
  const data = {
    sum: action.data.sum,
    fromId: state.prepaidData.id,
    toId: state.rootCardId
  };

  try {
    const { id, sum } = yield call(card2CardSubmit, data);
    yield put({ type: 'ADD_LAST_TRANSACTION', id, sum });
    yield put({ type: 'CHANGE_PREPAID_STATUS', status: 'success' });
  } catch (e) {
    console.warn('Error while card2CardPay');
  }
}

function* mySaga() {
  yield takeEvery('CARD_2_CARD_SUBMIT', card2CardPay);
}

export default mySaga;
