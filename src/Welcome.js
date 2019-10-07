/*
import React, { Component } from 'react';
class Welcome extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
};
export default Welcome;
*/

import React from 'react';

const Welcome = (props) => {
  return (
    <h1>Hola {props.name}</h1>
  );
}
export default Welcome;