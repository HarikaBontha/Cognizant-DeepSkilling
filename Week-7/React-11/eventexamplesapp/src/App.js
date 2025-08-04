
import './App.css';
import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault(); // synthetic event example
    alert("I was clicked!");
  };

  render() {
    return (
      <div className="App">
        <h1>🎯 Event Examples App</h1>
        <h2>Counter: {this.state.counter}</h2>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <br /><br />
        <button onClick={this.handleSyntheticEvent}>
          OnPress (Synthetic Event)
        </button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
