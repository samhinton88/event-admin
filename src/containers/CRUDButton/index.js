import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions';
import './style.sass';

class CRUDButton extends Component {
  handleClick = () => {
    this.props.deleteResource(this.props.resourceId)
  }


  render() {
    return (
      <div className='crud-button' onClick={this.handleClick}>
        {this.props.label}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteResource: (id) => dispatch(deleteEvent(id))
  }
}

export default connect(null, mapDispatchToProps)(CRUDButton);
