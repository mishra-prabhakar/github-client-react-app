import { FETCH_COMMITS, FETCH_REPOS, FILTER_COMMITS, UPDATE_FIELD } from '../actions/types';

const initialState = {
  commits: [],
  initialCommits: [],
  repos: [],
  pgCount: 0,
  userName: ""
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
      };

    case UPDATE_FIELD:  
      const { name, value } = action.payload;

      return { 
        ...state, 
        [name]: value //#ES6_Feature Computed property name. It allows to put expression in brackets.
      };

    default:
      return state;
  }
}

export default reducer;