import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showResourceForm, setResourceFormMode } from '../../actions';
import CRUDButton from '../CRUDButton';
import './style.sass';

class ContainerHead extends Component {
  handleCreateResourceClick = () => {
    this.props.setResourceFormMode('create')
    this.props.showCreateForm()
  }

  render() {
    return (
      <div className='container-head'>
        <div className='create-button-container'>
          <CRUDButton purpose='create' label='Create Event'/>
        </div>

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
