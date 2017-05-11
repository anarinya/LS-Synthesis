import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import ItemDetailsReducer from './ItemDetailsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  items: ItemsReducer,
  item: ItemDetailsReducer,
  form: formReducer
});

export default rootReducer;