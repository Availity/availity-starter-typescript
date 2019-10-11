import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'availity-uikit';
import App from './App';

render(
  <Router basename="/">
    <App />
  </Router>,
  document.querySelector('#root')
);