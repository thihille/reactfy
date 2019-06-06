import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers'
import 'typeface-roboto';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(ReduxThunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />    
    </Router>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
document.querySelector('#manifest').setAttribute('href', `${process.env.BASENAME}manifest.json`);

if (module.hot) {
  module.hot.accept();
}