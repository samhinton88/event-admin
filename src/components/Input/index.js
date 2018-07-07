import React, { Component } from 'react';
import './style.sass';

class Input extends Component {

  render() {
    return (
      <input placeholder={this.props.field}/>
    )
  }
}

export default Input
