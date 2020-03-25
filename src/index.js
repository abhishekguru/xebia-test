import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from './routes/Router';

const App = () => (
  <Router>
    <Routing />
  </Router>
)

render(<App />, document.getElementById('root'));
