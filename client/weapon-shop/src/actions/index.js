import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM_DETAILS = 'GET_ITEM_DETAIL';

export const getItems = () => {
  const promise = axios.get('http://localhost:5000/items');

  return {
    type: GET_ITEMS,
    payload: promise
  };
};

export const getItemDetails = (id) => {
  const promise = axios.get(`http://localhost:5000/items/${id}`);

  return {
    type: GET_ITEM_DETAILS,
    payload: promise
  };
};

export const addItem = (item, callback) => {
  const promise = axios.post('http://localhost:5000/items', item);
  promise.then(() => callback());
  return {
    type: ADD_ITEM,
    payload: promise
  };
};