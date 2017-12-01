import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
import App from './component/App';
require("babel-core/register");
require("babel-polyfill");

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
