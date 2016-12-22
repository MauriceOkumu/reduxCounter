import { INCREASE_ENGLISH_COUNT } from '../actions/index';


export default function EnglishCurrentReducer(state=0, action) {
  const current = state;
  switch(action.type){
    case INCREASE_ENGLISH_COUNT:
      return current + 1;
    default:
      return state;
  }
}

