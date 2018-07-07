import React, { Component } from 'react';
import './style.sass';

class Input extends Component {


  render() {

    const { value, field } = this.props;

    return (
      <input
        value={value}
        placeholder={field}
        onChange={(e) => this.props.onChange(field, e.target.value)}
        type={this.props.type}
      />
    )
  }
}

export default Input
