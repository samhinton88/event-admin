import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFormInput, createEvent, hideCreateForm, editEvent } from '../../actions';
import ImagePreview from '../ImagePreview';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Input from '../../components/Input';
import ImageUploader from '../ImageUploader';

// required for datepicker
import 'react-datepicker/dist/react-datepicker.css'
import './style.sass';

class ResourceForm extends Component {
  renderInputFields = () => {
    const { fields, onChangeInput, typeMap } = this.props;

    return Object.keys(fields).map((k) => {

      const dataType = typeMap[k];
      console.log(dataType)
      if (dataType === 'file') {

        return <ImageUploader onChange={onChangeInput} field={k}/>

      } else if (dataType === 'date') {

        console.log('woooo date')
        return (
          <DatePicker
            showTimeSelect
            onChange={(e) => onChangeInput(k, moment(e)) }
            value={fields[k].toString()}
            selected={null}
          />)
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
    const { fields, formMode, resourceId } = this.props;

    if (formMode === 'create') {
      this.props.createResource(fields);
    } else if (formMode === 'edit') {
      console.log('about to send resourceId', resourceId)
      this.props.editEvent(fields, resourceId)
    }
  }

  render() {
    const { formMode } = this.props;
    const label = formMode === 'create' ? 'Create Event' : 'Update Event';

    return (
      <div className='create-form'>
        <button className='close' onClick={this.props.hide}>x</button>
          {this.renderInputFields()}

        <button className='submit' onClick={this.handleSubmit}>{label}</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    resourceForm: { title, image, venue, time, text, typeMap, resourceId } ,
    UX: { resourceFormMode }
  } = state

  return {
    fields: {title, image, venue, time, text},
    typeMap,
    formMode: resourceFormMode,
    resourceId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (field, text) => dispatch(changeFormInput(field, text)),
    createResource: (data) => dispatch(createEvent(data)),
    editEvent: (data, id) => dispatch(editEvent(data, id)),
    hide: () => dispatch(hideCreateForm())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ResourceForm)
