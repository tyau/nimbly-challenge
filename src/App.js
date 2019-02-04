import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import fetch from 'isomorphic-fetch';

import MyButton from './components/MyButton.js';
import MyInput from './components/MyInput.js';
import MyOutput from './components/MyOutput.js';

class App extends Component {
  state = {
    inputVal: '',
    outputVal: ''
  };

  handleButtonClick = () => {
    if(this.state.inputVal.length > 0){
      this.setState({outputVal: `https://www.robohash.org/${this.state.inputVal}` });
    }
  }

  handleInputChange = (input) => {
    //doing the trim here since the input component should be generic
    this.setState({inputVal: input.trim()});
  }

  render() {
    const { inputVal, outputVal } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <h1>Get your very own robot avatar!</h1>
        <div>
          <MyInput 
            handleInputChange={this.handleInputChange}
            placeholderText="Type anything here!"
          />
          <MyButton
            handleButtonClick={this.handleButtonClick}
            buttonText="Get my robot avatar!"
          />
          <MyOutput
            inputVal={inputVal}
            outputVal={outputVal}
          />
        </div>
        </header>
      </div>
    );
  }
}

export default App;
