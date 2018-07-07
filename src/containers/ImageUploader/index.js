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
      const base64 = result.split('base64')[1];
      this.props.onChange(field, base64)
      this.props.onChange('imagePreviewUrl', result)
      console.log('length of preview', result.length)
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

const mapDispatchToProps = (dispatch) => {
  return
    // onPreviewChange: (imgUrl) => dispatch(changeFormInput('previewImageUrl', imgUrl))

}

export default ImageUploader;
