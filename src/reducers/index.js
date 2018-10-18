import { combineReducers } from 'redux';
import commitReducer from './commitReducer';

export default combineReducers({
  commits: commitReducer
});
