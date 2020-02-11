import { TOGGLE_BASKET } from '../actions/types';
export default function(state = true, action) {
  const { type } = action;

  switch (type) {
    case TOGGLE_BASKET:
      return !state;
    default:
      return state;
  }
}
