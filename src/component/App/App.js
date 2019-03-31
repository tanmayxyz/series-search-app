import React, { Component } from 'react';
import Main from '../Main';
import './App.css';
//import Series from '../../containers/Series';

import 'whatwg-fetch';
import {Link } from 'react-router-dom';


class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Link to = {'/'} >
        <header className="App-header">
          
          
          <h1 className="app-title">My Movie Database</h1>
          
        </header>
        </Link>
        
        
        <Main />
      </div>
    );
  }
}

export default App;
