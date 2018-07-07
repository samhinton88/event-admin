import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCreateForm } from '../../actions';
import './style.sass';

class ContainerHead extends Component {

  render() {
    return (
      <div className='container-head'>
        <button onClick={() => this.props.showCreateForm()}>Create Resource</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCreateForm: () => dispatch(showCreateForm())
  }
}

export default connect(null, mapDispatchToProps)(ContainerHead);
