import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImagePreview extends Component {

  render() {
    return (
      <div className='image-preview'>
        <img src={this.props.src} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    src: state.createForm.imagePreviewUrl
  }
}

export default connect(mapStateToProps)(ImagePreview);
