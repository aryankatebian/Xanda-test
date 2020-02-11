import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actions/types';

export default function(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_BASKET:
      payload.pending = true;
      return [...state, payload];
    case REMOVE_FROM_BASKET:
      payload.pending = false;
      let newState = state.filter(item => item.id !== payload.id);
      return [...newState];
    default:
      return state;
  }
}
