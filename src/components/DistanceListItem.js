import React, { Component } from "react";
import { Row } from "antd";
import { connect } from "react-redux";


import {click_city} from "../appRedux/actions/City"


class DistanceListItem extends Component {
  
  
  
    render() {
      
      const { city,county, centerLat, centerLon, northEastLat, northEastLon, southWestLat, southWestLon,distance } = this.props.data;
      
      return (
        <div>
            <div style={{width: "calc(100% - 50px)"}}>
            <Row className="gx-ml-0" >
              <p  className=" gx-mb-0">{distance}</p>
              </Row>
              
              
              
            </div>
          </div>
          
      );
  }
}
  
  const mapStateToProps = (state) => {
    return;
  };
  
  export default connect(mapStateToProps,{click_city})(DistanceListItem);
  
  