import React, { Component } from 'react';
import CRUDButton from '../CRUDButton';
import style from './style.sass';


class CRUDCell extends Component {

  render() {
    return (
      <td >
        <div className='crud-cell'>
          <CRUDButton purpose='viewupdate' data={this.props.data} resourceId={this.props.resourceId} label={'view / update'}/>
          <CRUDButton purpose='delete' data={this.props.data} resourceId={this.props.resourceId} label={'delete'}/>
        </div>
      </td>
    )
  }
}

export default CRUDCell;
