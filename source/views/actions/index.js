// Common actions

export const switchRootCard = id => ({
  type: 'SWITCH_ROOT_CARD',
  id
})

export const card2CardSubmit = data => ({
  type: 'CARD_2_CARD_SUBMIT',
  data
})

// Prepaid actions

export const addLastTransaction = (id, sum) => ({
  type: 'ADD_LAST_TRANSACTION',
  id,
  sum
})

export const changePrepaidStatus = status => ({
  type: 'CHANGE_PREPAID_STATUS',
  status
})

export const changePrepaidId = id => ({
  type: 'CHANGE_PREPAID_ID',
  id
})
