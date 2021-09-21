import {GET_FILTER} from "../../constants/ActionTypes";


const initialState = {
    lat:0.0,
    long:0.0,
    is_filtered:false
  };


  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_FILTER:
        return {
          ...state,
          lat:action.lat,
          long: action.long,
          is_filtered:true
        };
      
      default:
        return state;
    }
  }