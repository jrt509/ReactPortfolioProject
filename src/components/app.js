import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Rob Toutons Portfolio</h1>
        <h2>Cell Phone: (408) 306-8466</h2>
        <h2>Email: bischi8@gmail.com</h2>
        <h2>GitHub: jrt509</h2>
      <div>{ moment().format("MMMM Do YYYY, h:mm:ss a") }</div>
      </div>
    );
  }
}
