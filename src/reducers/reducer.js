import { FETCH_COMMITS, FETCH_REPOS, FILTER_COMMITS } from '../actions/types';

const initialState = {
  commits: [],
  initialCommits: [],
  repos: [],
  pgCount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMITS:
      return {
        ...state,
        commits: action.payload,
        initialCommits: action.payload
      };
    case FETCH_REPOS:
      return {
        ...state,
        repos: action.payload
    };
    case FILTER_COMMITS:
      return {
        ...state,
        commits: action.payload
      }
    default:
      return state;
  }
}

export default reducer;