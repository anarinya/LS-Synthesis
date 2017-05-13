import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEM_DETAILS = 'GET_ITEM_DETAIL';

export const getItems = () => {
  const promise = axios.get('http://localhost:5000/items');

  return dispatch => {
    return promise
      .then(response => {
        dispatch({ type: 'GET_ITEMS', payload: response.data });
      })
      .catch(error => console.log(error));
  };
};

export const getItemDetails = (id) => {
  const promise = axios.get(`http://localhost:5000/items/${id}`);

  return dispatch => {
    return promise
      .then(response => {
        dispatch({ type: GET_ITEM_DETAILS, payload: response.data });
      })
      .catch(error => console.log(error));
  };
};

export const addItem = (item, callback) => {
  const promise = axios.post('http://localhost:5000/items', item);

  return dispatch => {
    return promise
      .then(response => {
        callback();
        dispatch({ type: ADD_ITEM, payload: response.data });
      })
      .catch(error => console.log(error));
  };
};