export const api = (state = {}, action) => {
  switch (action.type) {
    case 'API':
      return action.payload;
    default:
      return state;
  }
};