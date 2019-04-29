import React, { Component } from 'react';
import './App.css';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class profile extends Component {
  constructor(props){
    super(props);
  }

  handleClick() {
    toast.notify('Hello world!')
  }

  render() {
    return (
      <div>
         <button onClick={this.handleClick}>
          alert
        </button>
      <p>{this.props.alamat}</p>
      <img src="Salju.jpg"/>
      </div>
    );
  }
}

export default profile;
