// top level app

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AdminTableContainer, NavBarLeft } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarLeft />
        <AdminTableContainer />
      </div>
    );
  }
}

export default App;
