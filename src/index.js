import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />, document.getElementById('root')
);
