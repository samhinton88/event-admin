import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagePreview from '../ImagePreview';
import './style.sass';

class ResourcePreview extends Component {
  renderHeader = () => {
    const { title, venue } = this.props.previewData;

    return (
      <div className='preview-header-text-container'>
        <h2 className='title-text'>{title}</h2>
          <span className='at-sign-span'>@</span>
        <h2 className='venue-text'>{venue}</h2>
      </div>
    )
  }

  renderImage = () => {

    return <ImagePreview />
  }

  renderBody = () => {
    const { text } = this.props.previewData;

    return <p className='preview-body-text'>{text}</p>
  }

  render() {
    console.log('props in resource-preview', this.props)
    return (
      <div className='resource-preview'>
        <div className='image-preview-container'>
          {this.renderImage()}
        </div>
        <div className='resource-preview-head'>
          {this.renderHeader()}
        </div>
        <div className='resource-preview-body'>
          {this.renderBody()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { resourceForm } = state
  return {
    previewData: resourceForm
  }
}

export default connect(mapStateToProps)(ResourcePreview)
