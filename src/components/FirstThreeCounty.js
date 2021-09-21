import React, { Component } from 'react';
import {connect} from "react-redux";

import {get_data} from "../appRedux/actions/City";
import {Card,Row,Col,Pagination} from "antd";
import 'antd/dist/antd.css';


import CountyListItem from "./CountyListItem";
import DistanceListItem from "./DistanceListItem";


function distance(x,y) {
    return Math.pow(x, 2) + Math.pow(y, 2);
  }

function custom_sort(a, b) {
    return a.distance - b.distance;
}

class FirstThreeCounty extends Component {
    constructor(props){
        super(props);
        this.state = {
            nearest_counties:[],
            distances:[]
          };
    }


    


    findNearest(){
        let new_counties=[];
        let new_distances=[];
        let lat = this.props.lat;
        let long = this.props.long;
        let counties = this.props.counties;
        counties.map(county=>{
            county["distance"] = distance(county.centerLat-lat,county.centerLon-long)
        })
        counties.sort(custom_sort);
        let nc=counties.filter((county,index)=>index<3)
        nc.map(county=>{
            new_counties.push(<CountyListItem data={county} in_top={true} />)
            new_distances.push(<DistanceListItem data={county} />)
        })
        this.setState({
            distances: new_distances,
            nearest_counties:new_counties
        })

    }





    componentDidUpdate(prevProps,prevState){
        if(this.props.counties!==prevProps.counties){
            this.findNearest();
        }
        if(this.props.lat!==prevProps.lat || this.props.long!==prevProps.long){
            this.findNearest()
        }

    }
    

 
 
   


    render() {
        return (
            <div >
                {this.props.is_filtered?(<Row>
                <Card title="Yerleşim Yeri" style={{width:"50%"}} >
                {this.state.nearest_counties}
                </Card>
                <Card title="Mesafe" style={{width:"50%"}} >
                {this.state.distances}
                </Card>
                </Row>):(<div></div>)}
                
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {counties:state.city.county,lat:state.filter.lat,long:state.filter.long,is_filtered:state.filter.is_filtered};
  };
  
  
  export default connect(mapStateToProps)(FirstThreeCounty);