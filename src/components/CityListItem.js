import React, { Component } from "react";
import { Row } from "antd";
import { connect } from "react-redux";


import {click_city,map_county} from "../appRedux/actions/City"


class CityListItem extends Component {
  
    show_county(data){
      this.props.click_city(data);
      this.props.map_county(this.props.data);
    }
  
    render() {
      
      const { city,county, centerLat, centerLon, northEastLat, northEastLon, southWestLat, southWestLon } = this.props.data;
      return (
        <div>
            <div style={{width: "calc(100% - 50px)",cursor: 'pointer'}} onClick={() => { this.show_county(city) }}>
            <Row className="gx-ml-0" >
              {city===this.props.selected_city?(<h3  className=" gx-mb-0">{city}</h3>)
              :(<p  className=" gx-mb-0">{city}</p>)}
              
              </Row>
              
              
              
            </div>
          </div>
          
      );
  }
}
  
  const mapStateToProps = (state) => {
    return {selected_city:state.city.clicked_city};
  };
  
  export default connect(mapStateToProps,{click_city,map_county})(CityListItem);
  
  