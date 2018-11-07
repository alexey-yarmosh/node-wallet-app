export default store => next => action => {
  const result = next(action)
  console.log('new state', store.getState())
  return result
}
