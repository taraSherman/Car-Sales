import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

/*
Install react-dom and react-redux
Import {createStore} from 'redux'; (line 3)
Create a const for the store (line 10)
Invoke the createStore function (line 10)
The createStore function takes in a reducer (line 10)
import {Provider} from 'react-redux'; (line 4)
Wrap <App /> in the Provider component (lines 14-16)
Pass the newly-created store object to <Provider />'s store prop (this makes the store prop accessible to everything in the App) (line 14)
 */