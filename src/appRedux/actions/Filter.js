import {GET_FILTER} from "../../constants/ActionTypes";


export function select_filter(lat,long){
    return (dispatch) => {
        dispatch({
            type: GET_FILTER,
            lat: lat,
            long:long
          });
    } 

};