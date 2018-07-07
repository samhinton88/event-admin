// top level app

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from './actions';
import logo from './logo.svg';


import { AdminTableContainer, NavBarLeft } from './containers';
import ResourceForm from './containers/ResourceForm';
import ResourcePreview from './containers/ResourcePreview';
import './style.sass'

class App extends Component {
  componentDidMount() {

    this.props.fetchEvents()

  }

  renderForm = () => {
    const { resourceFormVisible } = this.props;

    if (resourceFormVisible) {
      return <ResourceForm />
    }
  }

  renderPreview = () => {
    const { resourceFormVisible, resourceIsPreviewed } = this.props;

    if (resourceFormVisible && resourceIsPreviewed ) {
      return <ResourcePreview />
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavBarLeft />
        <AdminTableContainer />
        {this.renderForm()}
        {this.renderPreview()}
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
  const { resourceFormVisible, resourceIsPreviewed } = state.UX;

  return {
    resourceFormVisible: resourceFormVisible,
    resourceIsPreviewed: resourceIsPreviewed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
