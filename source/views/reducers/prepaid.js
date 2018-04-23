// TODO🔥: try to do the same using combineReducers
// import { combineReducers } from 'redux';

const initState = {
  id: 2,
  status: 'contract',
  summ: 0,
  isFetching: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_PREPAID_ID':
      return Object.assign({}, state, { id: action.id });
    default:
      return state;
  }
};
