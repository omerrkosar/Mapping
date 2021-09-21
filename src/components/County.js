import React, { Component } from 'react';
import {connect} from "react-redux";

import {get_data} from "../appRedux/actions/City";
import {Card,Row,Col,Pagination} from "antd";
import 'antd/dist/antd.css';


import CountyListItem from "./CountyListItem";


class County extends Component {
    constructor(props){
        super(props);
        this.state = {
            counties:[],
            page:1,
            totalPage:1
          };
    }


    







    pushCounties(){
        let new_counties=[];
        let nc3 = this.props.counties.filter(county=>county.city===this.props.selected_city);
        let nc2 = nc3.filter(county=>county.city!==county.county);
        let nc=[]
        if(nc2!==undefined){
            nc = nc2.filter((county,index)=>Math.floor(index/10)===this.state.page-1);
        }
        nc.map(county=>{
            new_counties.push(<CountyListItem data={county} in_top={false} />)
        })
        let totalPage= nc2.length;
        
        this.setState({
            page:1,
            totalPage:totalPage,
            counties:new_counties
        })
    }
    pushCountiesChangePage(){
        let new_counties=[];
        let nc3 = this.props.counties.filter(county=>county.city===this.props.selected_city);
        let nc2 = nc3.filter(county=>county.city!==county.county);
        let nc=[]
        if(nc2!==undefined){
            nc = nc2.filter((county,index)=>Math.floor(index/10)===this.state.page-1);
        }
        nc.map(county=>{
            new_counties.push(<CountyListItem data={county} />)
        })
        let totalPage= nc2.length;
        
        this.setState({
            totalPage:totalPage,
            counties:new_counties
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.counties!==prevProps.counties){
            this.pushCounties();
        }
        if(this.state.page!==prevState.page){
            this.pushCountiesChangePage();
        }
        if(this.props.selected_city!==prevProps.selected_city){
            this.pushCounties();
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
                <Card title="İlçeler">
                {this.state.counties}
                <Pagination current={this.state.page} total={this.state.totalPage} size = {10} showSizeChanger = {false} onChange={this.onChange}/>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {counties:state.city.county,selected_city:state.city.clicked_city};
  };
  
  
  export default connect(mapStateToProps)(County);