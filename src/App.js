// top level app

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from './actions';
import logo from './logo.svg';


import { AdminTableContainer, NavBarLeft } from './containers';
import CreateForm from './containers/CreateForm';
import './style.sass'

class App extends Component {
  componentDidMount() {

    this.props.fetchEvents()

  }

  render() {
    console.log('props in top level app', this.props)
    return (
      <div className="App">
        <NavBarLeft />
        <AdminTableContainer />
        <CreateForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(null, mapDispatchToProps)(App);
