
import React, { Component } from 'react';

import { connect } from "react-redux";
import {Row,Col} from "antd";

import City from "./City";
import County from "./County";
import FilterContain from "./FilterContain";
import SimpleMap from "./SimpleMap";

class AppPage extends Component {
  constructor(props){
    super(props);
    this.state={
      row_size:0,
      map_row_size:0
    }
  }


  componentDidUpdate(prevProps,prevState){
    if(this.props.clicked_city!==prevProps.clicked_city){
      if(this.props.clicked_city!==""){
        this.setState({
          row_size:8
        })
      }
    }
    if(this.props.m_county!==prevProps.m_county){
      if(Object.keys(this.props.m_county).length !== 0) {
        this.setState({
          map_row_size:16
        })
      }
    }
  }


  render(){
    return (
      <div>
        <Row>
        <Col sm={8}> <City/></Col>
        <Col sm={this.state.row_size}> <County/></Col>
        <Col sm={8-this.state.row_size}></Col>
        <Col sm={8}> <FilterContain/></Col>
        </Row>
        <Row>
        <Col sm={4}> </Col>
          <Col sm={this.state.map_row_size}> <SimpleMap /> </Col>
          <Col sm={4}> </Col>
        </Row>
        </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {clicked_city:state.city.clicked_city,m_county:state.city.map_county};
};

export default connect(mapStateToProps)(AppPage)