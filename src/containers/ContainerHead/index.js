import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showResourceForm, setResourceFormMode } from '../../actions';
import './style.sass';

class ContainerHead extends Component {
  handleCreateResourceClick = () => {
    this.props.setResourceFormMode('create')
    this.props.showCreateForm()
  }

  render() {
    return (
      <div className='container-head'>
        <button onClick={this.handleCreateResourceClick}>Create Resource</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCreateForm: () => dispatch(showResourceForm()),
    setResourceFormMode: (mode) => dispatch(setResourceFormMode(mode))
  }
}

export default connect(null, mapDispatchToProps)(ContainerHead);
