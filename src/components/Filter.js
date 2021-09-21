import React from "react";
import {InputNumber,Row,Button} from "antd";
import {connect} from "react-redux";
import {select_filter} from '../appRedux/actions/Filter'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude:"",
      longitute:"",
      filterButton:false
    }
  }
    
      


    onChangeLat = e => {
    this.setState({
        ...this.state,
        latitude:e
    })
    };

    onChangeLong = e => {
    this.setState({
        ...this.state,
        longitute:e
    })
    };
    
    onClick = () => {
        this.setState({
            filterButton:!this.state.filterButton
        })
    }


      

    componentDidUpdate(prevProps,prevState){
    if(this.state.filterButton!==prevState.filterButton){
        this.props.select_filter(this.state.latitude,this.state.longitute)
    }
    
        
        
    }


  render() {
  
    return (
       <div>
           <Row>
           <InputNumber placeholder="Latitude" onChange={this.onChangeLat} allowClear = {true} style={{width:"30%"}}/>
           <InputNumber placeholder="Longitute" onChange={this.onChangeLong} allowClear = {true} style={{width:"30%",marginLeft:"3%",marginRight:"3%"}}/> 
            <Button onClick={this.onClick} style={{width:"34%"}}>En Yakın Yerleşim</Button>
           </Row>
        </div>
    );

    
    

  }
}

const mapStateToProps = (state) => {
  return;
};


export default connect(mapStateToProps,{select_filter})(Filter);
