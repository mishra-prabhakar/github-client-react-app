import { FETCH_COMMITS, SEARCH_REPO } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMITS:
      return {
        ...state,
        items: action.payload
      };
    case SEARCH_REPO:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
