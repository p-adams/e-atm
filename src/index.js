import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const KEYS = [
  {k: 1}, {k: 2}, {k: 3}, {k: 4},
  {k: 5}, {k: 6}, {k: 7}, 
  {k: 8},{k: 9}, {k: 0},
  {k: '$'}, {k: "."}
 
]

const ACCOUNTS = [
  {pin: 1234, name: 'John Smith', balance: 2500}
]




ReactDOM.render(
  <App keys={KEYS} accounts={ACCOUNTS}/>,
  document.getElementById('root')
);
