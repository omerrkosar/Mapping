import './App.css';

import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import {Row,Col} from "antd";

import City from "./components/City"
import County from "./components/County"

import AppPage from "./components/AppPage"

class App extends Component {


  
  render(){
    return (
      <Provider store={store} >
        <AppPage/>
      </Provider>
    );
  }
  
}

export default App;
