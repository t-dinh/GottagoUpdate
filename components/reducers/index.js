import { REQUESTED_DATA } from '../constants';

const initialState = {}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default rootReducer;