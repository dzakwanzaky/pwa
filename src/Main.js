import React, { Component } from 'react';
import logo from './logo.svg';
import './new.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from './Home.js';

class Main extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Fetching Data API</h1>
          <u1 className="header">
              <li><NavLink exact to="Home.js">Home</NavLink></li>
          </u1>
          <div className="content">
            <Route exact path="Home.js" component={Home}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main;




