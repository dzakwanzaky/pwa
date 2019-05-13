import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import { render } from 'react-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount () {
    fetch("http://randomuser.me/api/")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.results.map(data => (
        {
          id: `${data.id.name}`,
        }
      )))
      .then(items => this.setState({
        items,
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error))
  }


render() {
  const {items} = this.state;
  return (
    <div className = "boxWhite">
      {
       items.length > 0 ? items.map(item => {
          const {id, firstName, lastName, location, thumbnail} = item;
          return (
            <div key={id} className="bgCircle">
              <center><img src={thumbnail} alt={firstName} className="circle"/>
              </center><br/>
              <div className="ctr">
                {firstName} {lastName}<br/>
                {location}

              </div>
            </div>
          );
        }) :null
      }
    </div>
  );
 }
}

export default Home;




