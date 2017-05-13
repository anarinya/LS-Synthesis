import { GET_ITEM_DETAILS } from '../actions';

export default (item = {}, action) => {
  switch(action.type) {
    case GET_ITEM_DETAILS:
      return action.payload;
    default:
      return item;
  }
};