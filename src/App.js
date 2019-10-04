import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      inputcontent: "",
      repeater: ""
    };
    this.repetidor=this.repetidor.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" value={this.state.inputcontent} onChange={this.repetidor} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }

  
  
  repetidor(event) {
    this.setState({
      repeater: event.target.value,
      inputcontent: event.target.value
    });
  }
}

export default App;
