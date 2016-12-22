import { INCREASE_SPANISH_COUNT, DECREASE_SPANISH_COUNT } from '../actions/index';


export default function SpanishCurrentReducer(state=0, action) {
  const current = state;
  switch(action.type){
    case INCREASE_SPANISH_COUNT:
      return current + 1;
    case DECREASE_SPANISH_COUNT:
      return current - 1;
    default:
      return state;
  }
}

