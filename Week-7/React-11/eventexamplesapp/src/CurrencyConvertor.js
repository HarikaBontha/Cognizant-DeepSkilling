// src/CurrencyConvertor.js
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euros = this.state.rupees / 90; // Assume 1 Euro = ₹90
    this.setState({ euro: euros.toFixed(2) });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Indian Rupees: </label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>

        {this.state.euro && (
          <h3>Equivalent in Euro: €{this.state.euro}</h3>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
