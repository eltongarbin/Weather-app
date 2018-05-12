import { FETCH_WEATHER } from '../actions/index';

const initialState = { list: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        list: [action.payload]
      };
    default:
      return state;
  }
}
