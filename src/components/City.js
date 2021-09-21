import React, { Component } from 'react';
import {connect} from "react-redux";

import {get_data} from "../appRedux/actions/City";
import {Card,Row,Col,Pagination} from "antd";
import 'antd/dist/antd.css';


import CityListItem from "./CityListItem";


class City extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities:[],
            showHideDate:true,
            page:1,
            totalPage:9
          };
    }


    






      componentDidMount() {
        this.props.get_data()

    }

    pushCities(){
        let new_cities=[];
        let nc = this.props.cities.filter((city,index)=>Math.floor(index/10)===this.state.page-1);
        nc.map(city=>{
            new_cities.push(<CityListItem data={city} />)
        })
        let totalPage= this.props.cities.length;

        this.setState({
            totalPage:totalPage,
            cities:new_cities
        })
    }


    componentDidUpdate(prevProps,prevState){
        if(this.props.cities!==prevProps.cities){
            this.pushCities();
        }
        if(this.state.page!==prevState.page){
            this.pushCities();
        }
    }
    


    onChange =(page_index) => {
        this.setState({
            page:page_index
        })
    }
   


    render() {
        return (
            <div >
                <Card title="Şehirler">
                {this.state.cities}
                <Pagination current={this.state.page} total={this.state.totalPage} size = {10} showSizeChanger = {false} onChange={this.onChange}/>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {cities:state.city.city};
  };
  
  
  export default connect(mapStateToProps,{get_data})(City);