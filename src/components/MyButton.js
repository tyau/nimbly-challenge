import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleButtonClick();
  };

  render(){
    return (
      <button onClick={() => this.handleClick()}>{this.props.buttonText}</button>
    );
  }
}

MyButton.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};

export default MyButton;