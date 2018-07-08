import React, { Component } from 'react';
import { connect } from 'react-redux';
import BufferImage from '../../components/BufferImage';
import './style.sass'

class ImagePreview extends Component {
  renderPreviewMechanism = () => {
    const { formMode, bufferData, imageType } = this.props;
    console.log('about to render preview in mode', formMode)
    console.log('bufferData', this.props.bufferData)

    if (formMode === 'create') {
      return <img className='image-preview-image' src={this.props.imagePreviewUrl} />
    } else {
      console.log('rendering from bufferData', this.props.bufferData, 'imageType', imageType)
      return <BufferImage contentType={imageType} data={bufferData} />
    }
  }

  renderStyle() {

  }

  render() {
    console.log('image preview props', this.props)
    return (
      <div className='image-preview'>
        {this.renderPreviewMechanism()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    imagePreviewUrl: state.resourceForm.imagePreviewUrl,
    bufferData: state.resourceForm.image.data,
    imageType: state.resourceForm.image.contentType,
    formMode: state.UX.resourceFormMode
  }
}

export default connect(mapStateToProps)(ImagePreview);
