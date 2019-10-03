import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      clicks: 0
    };

    this.incrementa = this.incrementa.bind(this)
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.clicks}</span>
        <button id="inc" onClick={this.incrementa}>Incrementa</button>
      </div>
    );
  }

    
  incrementa() {
    let valor=Number(this.state.clicks);
    valor++;
    this.setState({
      clicks: valor
    });
  }
}

export default App;
