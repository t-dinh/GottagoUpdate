import { MAP_DATA } from '../constants';

const initalState = {
    mapLocation: {}
    
  }



const rootReducer = (state = initalState, action) => {
    switch (action.type) {
      case MAP_DATA:
        return { ...state, mapLocation: action.data };
      
      default:
        return state;
    }
  }
  
  export default rootReducer;