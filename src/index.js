import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import 'animate.css/animate.css';

const store = createStore(rootReducer);

const render = (Component) => {
    ReactDOM.render(
        <HashRouter>
          <Provider store={store}>
            <Component/>
          </Provider>
        </HashRouter>,
      document.getElementById('root')
    );
  }; 
  
  render(App);
  
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
