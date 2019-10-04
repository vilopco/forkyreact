import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      textareacontent: "",
      caracteres: 0
    };
    this.contador = this.contador.bind(this)
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.textareacontent} onKeyUp={this.contador} onChange={this.contador}></textarea>
        <div className="counter">{this.state.caracteres}</div>
      </div>
    );
  }
  
  contador(event) {
    let valor=this.state.textareacontent.length;
    this.setState({
      caracteres: valor,
      textareacontent:event.target.value
    });
  }
}

export default App;
