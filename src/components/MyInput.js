import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyInput extends Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handleInputChange(e.target.value);
  };


  render(){
    return (
      <input onChange={e => this.handleChange(e)}></input>
    );
  }
}

MyInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired
};

export default MyInput;