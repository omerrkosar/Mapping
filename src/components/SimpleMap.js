import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline } from "react-google-maps"
import {connect} from "react-redux";

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <div>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    center={props.position}
  >
   <Marker position={props.position} color="Green"/>
   <Polyline path={props.path} />
   
  </GoogleMap>
  </div>
)

class SimpleMap extends React.PureComponent {
  constructor(props){
      super(props);
      this.state={
          path:[]
      }
  }




  componentDidUpdate(prevProps,prevState){
    if(this.props.m_county!==prevProps.m_county){
        if(Object.keys(this.props.m_county).length !== 0) {
          let new_path=[];
          new_path.push({lat:this.props.m_county.northEastLat,lng:this.props.m_county.northEastLon});
          new_path.push({lat:this.props.m_county.southWestLat,lng:this.props.m_county.northEastLon});
          new_path.push({lat:this.props.m_county.southWestLat,lng:this.props.m_county.southWestLon});
          new_path.push({lat:this.props.m_county.northEastLat,lng:this.props.m_county.southWestLon});
          new_path.push({lat:this.props.m_county.northEastLat,lng:this.props.m_county.northEastLon});
          this.setState({
            path:new_path
          })
        }
      }
  }


  

  

  render() {
    
    return (
        <div style={{width:"100%"}}>      
        <MapComponent 
        path= {this.state.path}
        position={{lat:this.props.m_county.centerLat,lng:this.props.m_county.centerLon}}/>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
    return {m_county:state.city.map_county};
  };
  
  export default connect(mapStateToProps)(SimpleMap);