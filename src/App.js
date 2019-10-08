import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contenido:""
    }
    this.toggle = this.toggle.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" onChange={this.toggle}/> Mostrar información importante</label>
        <p>{this.state.contenido}</p>
      </div>
    );
  }
  toggle(event) {
    if(event.target.checked){
      this.setState({
        contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      })
    }else{
      this.setState({
        contenido:""
      });
    }    
  }
}

export default App;