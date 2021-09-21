import {GET_DATA,CLICK_CITY,MAP_COUNTY} from "../../constants/ActionTypes";

import data from '../../data/cities.json'

export function get_data(){
    
    return (dispatch) => {
        dispatch({
            type: GET_DATA,
            data: data
          });
    } 

};


export function click_city(city){
    return (dispatch) => {
        dispatch({
            type:CLICK_CITY,
            clicked_city:city
        })
    }
};

export function map_county(county){
    return (dispatch)=>{
        dispatch({
            type: MAP_COUNTY,
            map_county: county
        })
    }
}
