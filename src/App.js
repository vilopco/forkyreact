import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {this.state.names.map((name) =>
          <Welcome name={name} key={name} />
        )}
      </div>
    );
  }
}

export default App;