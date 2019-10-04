import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{person}</li>);
  
<ul>{peopleLis}</ul>
  
  
  
  // ReactDOM.render goes here:
  