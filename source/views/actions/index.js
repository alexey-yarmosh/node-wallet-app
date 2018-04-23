// Common actions

export const switchRootCard = id => ({
  type: 'SWITCH_ROOT_CARD',
  id
});

// Prepaid actions

export const changePrepaidStatus = status => ({
  type: 'CHANGE_PREPAID_STATUS',
  status
});

export const changePrepaidId = id => ({
  type: 'CHANGE_PREPAID_ID',
  id
});
