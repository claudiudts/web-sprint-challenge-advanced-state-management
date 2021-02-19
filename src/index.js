import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

// Task 1. 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  reducer   from './reducers';
import logger from 'redux-logger';

const { worker } = require('./mocks/browser');
worker.start();

// Task 2.
const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");

ReactDOM.render(
    // TASK 3.
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

//Task List:
//1. Add in all necessary components and library methods. 
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.