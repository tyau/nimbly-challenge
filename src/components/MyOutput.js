import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyOutput extends Component{

  render(){
    return (
      <div>
      	<div>Get your very own robot avatar!</div>
      	<img src={this.props.outputVal} />
      </div >
    );
  }
}

MyOutput.propTypes = {
  outputVal: PropTypes.string.isRequired
};

export default MyOutput;