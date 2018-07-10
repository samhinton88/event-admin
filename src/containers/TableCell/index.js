import React, { Component } from 'react';
import BufferImage from '../../components/BufferImage';
import './style.sass'

class TableCell extends Component {
  renderFieldData = () => {
    const { data, isImage } = this.props;
    if (!data) { return }

    if (isImage) {
      const { contentType, data: imageData } = data;

      return (
        <div className='cell-data-container'>
          <BufferImage data={imageData} contentType={contentType}/>
        </div>
      )
    }

    if (typeof data === 'string') {
      return data
    }
  }

  render() {
    return (
      <td className='table-cell'>
        <div className='cell-data-container'>
          {this.renderFieldData()}
        </div>
      </td>
    )
  }
}

export default TableCell;
