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
    this.setState({outputVal: `https://www.robohash.org/${this.state.inputVal}` });
  }

  handleInputChange = (input) => {
    this.setState({inputVal: input});
  }

  render() {
    const { inputVal, outputVal } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <MyInput 
            handleInputChange={this.handleInputChange}
          />
          <MyButton
            handleButtonClick={this.handleButtonClick}
          />
          <MyOutput
            outputVal={outputVal}
          />
        </header>
      </div>
    );
  }
}

export default App;
