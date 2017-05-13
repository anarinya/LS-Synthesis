import { GET_ITEMS } from '../actions';

export default (items = [], action) => {
  switch(action.type) {
    case GET_ITEMS:
      return action.payload;
    default:
      return items;
  }
};