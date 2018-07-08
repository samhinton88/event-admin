import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.sass'

class ImageUploader extends Component {
  handleOnChange = (e) => {
    const { field } = this.props
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {

      const { result } = reader;

      console.log('on load result', result)
      // start of string is not suitable for direct buffering as base64
      const [dataType, base64] = result.split('base64');
      const buffer = Buffer.from(base64, 'base64')

      this.props.onChange(field, {contentType: dataType, data: buffer})
      this.props.onChange('imagePreviewUrl', result)

    }

    reader.readAsDataURL(file);

  }

  render() {
    return (
      <input
        onChange={this.handleOnChange}
        className='image-uploader'
        type='file'
      />
    )
  }
}


export default ImageUploader;
