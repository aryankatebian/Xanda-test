import { GET_ITEMS } from './types';

export const getItems = () => dispatch => {
  dispatch({
    type: GET_ITEMS
  });
};
