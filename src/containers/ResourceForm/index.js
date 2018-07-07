import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFormInput, createEvent, hideCreateForm } from '../../actions';
import ImagePreview from '../ImagePreview';
import Input from '../../components/Input';
import ImageUploader from '../ImageUploader';

import './style.sass';

class ResourceForm extends Component {
  renderInputFields = () => {
    const { fields, onChangeInput, typeMap } = this.props;

    return Object.keys(fields).map((k) => {
      if (typeMap[k] === 'file') {
        return <ImageUploader onChange={onChangeInput} field={k}/>
      }
      return (
        <Input
          field={k}
          type={typeMap[k]}
          onChange={onChangeInput}
          value={fields[k]}/>
      )
    })
  }


  handleSubmit = () => {
    const { fields } = this.props;

    this.props.createResource(fields);
  }

  render() {
    console.log('props in create form', this.props)

    return (
      <div className='create-form'>
        <button onClick={this.props.hide}>close</button>
          {this.renderInputFields()}

        <button onClick={this.handleSubmit}>Submit</button>
        <ImagePreview />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    resourceForm: { title, image, venue, time, text, typeMap } ,
    UX: { formMode }
  } = state

  return {
    fields: {title, image, venue, time, text},
    typeMap,
    formMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (field, text) => dispatch(changeFormInput(field, text)),
    createResource: (data) => dispatch(createEvent(data)),
    hide: () => dispatch(hideCreateForm())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ResourceForm)
