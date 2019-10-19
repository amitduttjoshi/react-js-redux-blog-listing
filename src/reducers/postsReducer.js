export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      console.log ('okok');
      return action.payload;
    default:
      return state;
  }
};
