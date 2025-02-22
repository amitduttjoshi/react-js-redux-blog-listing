export default (state = [], action) => {
  if (action.type === 'FETCH_USER') {
    return [...state, action.payload.data];
  }
  return state;
};
