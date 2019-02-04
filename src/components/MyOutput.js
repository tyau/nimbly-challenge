import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyOutput extends Component{

  render(){

    let img;
    if(this.props.outputVal.length <= 0){
      img = <div className="img-placeholder"></div>;
    } else {
      img = <img src={this.props.outputVal} title={this.props.outputVal} />;
    }

    return (
      <div>
        {img}
      </div >
    );
  }
}

MyOutput.propTypes = {
  inputVal: PropTypes.string,
  outputVal: PropTypes.string.isRequired
};

export default MyOutput;