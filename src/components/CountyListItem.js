import React, { Component } from "react";
import { Row } from "antd";
import { connect } from "react-redux";


import {map_county} from "../appRedux/actions/City"


class CountyListItem extends Component {
  
    show_county(data){
      this.props.map_county(data)
    }
  
    render() {
      
      const { city,county, centerLat, centerLon, northEastLat, northEastLon, southWestLat, southWestLon } = this.props.data;
      if(this.props.in_top){
        return (
          <div>
              <div style={{width: "calc(100% - 50px)",cursor: 'pointer'}} onClick={() => { this.show_county(this.props.data) }}>
              <Row className="gx-ml-0" >
                {this.props.m_county===this.props.data?(<h3  className=" gx-mb-0">{county}</h3>):(<p  className=" gx-mb-0">{county}</p>)}
                
                </Row>
                
                
                
              </div>
            </div>
            
        );  
      }
      return (
        <div>
            <div style={{width: "calc(100% - 50px)",cursor: 'pointer'}} onClick={() => { this.show_county(this.props.data) }}>
            <Row className="gx-ml-0" >
              <p  className=" gx-mb-0">{county}</p>
              </Row>
              
              
              
            </div>
          </div>
          
      );
  }
}
  
  const mapStateToProps = (state) => {
    return {m_county:state.city.map_county};
  };
  
  export default connect(mapStateToProps,{map_county})(CountyListItem);
  
  