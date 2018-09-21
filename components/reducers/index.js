import {RECEIVED_DATA, MAP_DATA, INPUT_DATA } from '../constants';

const initalState = {
   
      
    
    
}



const rootReducer = (state = initalState, action) => {
    switch (action.type) {
      case 'RECEIVED_DATA':
        return action.payload
      
      default:
        return state;
    }
  }
  
  export default rootReducer;