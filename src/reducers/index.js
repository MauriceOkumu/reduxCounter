import { combineReducers } from 'redux';
import EnglishCurrentReducer from './reducer_English';
import SpanishCurrentReducer from './reducer_Spanish';

const rootReducer = combineReducers({
  EnglishCurrentReducer,
  SpanishCurrentReducer,
  
});

export default rootReducer;