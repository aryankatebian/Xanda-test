import { ADD_TO_BASKET, REMOVE_FROM_BASKET, TOGGLE_BASKET } from './types';

export const addToBasket = item => dispatch => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: item
  });
};
export const removeFromBasket = item => dispatch => {
  dispatch({
    type: REMOVE_FROM_BASKET,
    payload: item
  });
};
export const toggleBasket = () => dispatch => {
  dispatch({
    type: TOGGLE_BASKET
  });
};
