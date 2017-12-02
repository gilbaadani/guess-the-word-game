import { combineReducers } from 'redux';
import lettesButtons from './lettesButtons';
import currentWord from './currentWord';
const rootReducer = combineReducers({
  lettesButtons,
  currentWord
});

export default rootReducer;
