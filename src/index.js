import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import App from "./components/App";
import { Provider } from 'react-redux';
import store from './store';


const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)


const rootElement = document.getElementById("root");
render( routes, rootElement );