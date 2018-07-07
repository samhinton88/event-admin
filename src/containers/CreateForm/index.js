import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFormInput } from '../../actions';
import Input from '../../components/Input';

import './style.sass';

class CreateForm extends Component {
  renderInputFields = () => {
    const { fields, changeFormInput } = this.props;

    return Object.keys(fields).map((k) => {
      return <Input field={k} onChange={changeFormInput} />
    })
  }

  render() {
    return (
      <div className='create-form'>
        {this.renderInputFields()}
        <button>Submit</button>
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
    onChangeInput: (field, text) => dispatch(changeFormInput(field, text))
  }
}



export default connect(mapStateToProps)(CreateForm)
