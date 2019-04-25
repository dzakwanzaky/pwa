import React, { Component } from 'react';
import './App.css';

class profile extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
      <p>{this.props.alamat}</p>
      <img src="Salju.jpg"/>
      </div>
    );
  }
}

export default profile;
