import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFormInput, createEvent } from '../../actions';
import Input from '../../components/Input';

import './style.sass';

class CreateForm extends Component {
  renderInputFields = () => {
    const { fields, onChangeInput } = this.props;

    return Object.keys(fields).map((k) => {
      return (
        <Input field={k} onChange={onChangeInput} value={fields[k]}/>
      )
    })
  }

  handleSubmit = () => {
    const { fields } = this.props;

    this.props.createResource(fields);
  }

  render() {

    return (
      <div className='create-form'>
        {this.renderInputFields()}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { createForm: { title, image, venue, time, text } } = state

  return {
    fields: {title, image, venue, time, text}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (field, text) => dispatch(changeFormInput(field, text)),
    createResource: (data) => dispatch(createEvent(data))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
