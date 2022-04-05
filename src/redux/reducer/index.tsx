import {combineReducers} from 'redux';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  demo: apiReducer,
});

export default rootReducer;

