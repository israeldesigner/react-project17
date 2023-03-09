import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-style.css';
import { Home } from './templates/home';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  root,
);
