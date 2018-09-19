import { MAP_DATA, INPUT_DATA } from '../constants';

const initalState = {
    mapLocation: {},
    userInput: []
      
    
    
}



const rootReducer = (state = initalState, action) => {
    switch (action.type) {
      case 'INPUT_DATA':
        return {
          userInput: [...state.userInput, action.newInput]
        }
        
      // case MAP_DATA:
      //   return { ...state.mapLocation, action.data };
      
      default:
        return state;
    }
  }
  
  export default rootReducer;