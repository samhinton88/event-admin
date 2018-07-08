import React, { Component } from 'react';
import BufferImage from '../../components/BufferImage';
import './style.sass'

class TableCell extends Component {
  renderFieldData = () => {
    const { data, isImage } = this.props;
    if (!data) { return }

    if (isImage) {
      const { contentType, data: imageData } = data;

      return <BufferImage data={imageData} contentType={contentType}/>
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
