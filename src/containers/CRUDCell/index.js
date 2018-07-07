import React, { Component } from 'react';
import CRUDButton from '../CRUDButton';
import style from './style.sass';


class CRUDCell extends Component {

  render() {
    return (
      <td className='crud-cell'>
        <CRUDButton resourceId={this.props.resourceId} label={'view / update'}/>
        <CRUDButton resourceId={this.props.resourceId} label={'delete'}/>
      </td>
    )
  }
}

export default CRUDCell;
