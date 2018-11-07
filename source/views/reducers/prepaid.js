// TODO🔥: try to do the same using combineReducers

const initState = {
  id: 2,
  status: 'contract',
  sum: 0,
  isFetching: false,
  lastTransaction: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_PREPAID_ID':
      return Object.assign({}, state, { id: action.id })
    case 'CHANGE_PREPAID_STATUS':
      return Object.assign({}, state, { status: action.status })
    case 'ADD_LAST_TRANSACTION':
      return Object.assign({}, state, { lastTransaction: { id: action.id, sum: action.sum } })
    default:
      return state
  }
}
