import React, { Component } from 'react';
import './style.sass'

class TableCell extends Component {
  render() {
    return (
      <td className='table-cell'>
        {this.props.data}
      </td>
    )
  }
}

export default TableCell;
