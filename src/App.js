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

  renderForm = () => {
    const { createFormVisible } = this.props;

    if (createFormVisible) {
      return <CreateForm />
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavBarLeft />
        <AdminTableContainer />
        {this.renderForm()}

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    createFormVisible: state.UX.createFormVisible
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
