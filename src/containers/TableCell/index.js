import React, { Component } from 'react';
import './style.sass'

class TableCell extends Component {
  renderFieldData = () => {
    const { data, isImage } = this.props;
    if (!data) { return }

    if (isImage) {

      const string64 = Buffer(data.data).toString('base64')
      return (
        <img
          className='table-cell-image'
          src={'data:image/png;base64, '+ string64 }
        />
      )
    }

    if (typeof data === 'string') {
      return data
    }
  }

  render() {
    return (
      <td className='table-cell'>
        {this.renderFieldData()}
      </td>
    )
  }
}

export default TableCell;
