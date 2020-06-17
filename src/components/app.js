import React, { Component } from 'react';
import moment from "moment";
import InteractiveButton from "./interactive-button";
import PortfolioContainer from "./portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Rob Toutons Portfolio</h1>
        
      <div>{ moment().format("MMMM Do YYYY, h:mm:ss a") }</div>
      <PortfolioContainer />
      </div>
    );
  }
}
