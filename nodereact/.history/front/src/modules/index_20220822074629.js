import { combineReducers } from 'redux';
import user from '../reducer/user_reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
