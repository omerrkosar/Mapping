import {GET_DATA,CLICK_CITY,MAP_COUNTY} from "../../constants/ActionTypes";

  const initialState = {
    city:[],
    county:[],
    clicked_city:"",
    map_county:{},
  };


  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_DATA:
        let cities = action.data.filter(elem=>elem.city===elem.county)
        let citiesSerialized = cities.map(e => JSON.stringify(e));
        const setSerialized = new Set(citiesSerialized);
        const uniqueCitiesSerialized = [...setSerialized];
        const uniqueCities = uniqueCitiesSerialized.map(e => JSON.parse(e));

        let countiesSerialized = action.data.map(e => JSON.stringify(e));
        const cSetSerialized = new Set(countiesSerialized);
        const uniqueCountiesSerialized = [...cSetSerialized];
        const uniqueCounties = uniqueCountiesSerialized.map(e => JSON.parse(e));
        return {
          ...state,
          city:uniqueCities,
          county: uniqueCounties
        };
      case MAP_COUNTY:
        return{
          ...state,
          map_county:action.map_county
        }
      case CLICK_CITY:
        return{
            ...state,
            clicked_city:action.clicked_city,
            
        }
      default:
        return state;
    }
  }