import { REQUESTED_DATA } from '../constants';

const initialState = {}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_DATA:
      return action.payload;
    case 'INPUT_DATA':
      return {
        userInput: [...state.userInput, action.newInput]
      }
    default:
      return state;
  }
    
}

export default rootReducer;