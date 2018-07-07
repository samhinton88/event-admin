import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEvent, hydrateResourceForm, showResourceForm } from '../../actions';
import './style.sass';

class CRUDButton extends Component {
  handleClick = () => {
    const { purpose, data } = this.props;
    if(purpose === 'delete') {
      this.props.deleteResource(this.props.resourceId)
    } else if (purpose === 'viewupdate') {
      this.props.hydrateResourceForm(data)
      this.props.showResourceForm()
    }
  }

  renderStyle = () => {
    const { purpose } = this.props;

    if (purpose === 'viewupdate') { return ' view-update' }

    if (purpose === 'delete') { return ' delete' }
  }

  render() {
    return (
      <div className={'crud-button' + this.renderStyle()} onClick={this.handleClick}>
        {this.props.label}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteResource: (id) => dispatch(deleteEvent(id)),
    hydrateResourceForm: (data) => dispatch(hydrateResourceForm(data)),
    showResourceForm: () => dispatch(showResourceForm())
  }
}

export default connect(null, mapDispatchToProps)(CRUDButton);
