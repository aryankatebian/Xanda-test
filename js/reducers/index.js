import { combineReducers } from 'redux';
import items from './getItems';
import addToBasket from './basket';
import toggleBasket from './toggleBasket';

export default combineReducers({
  items,
  basket: addToBasket,
  toggleBasket
});
