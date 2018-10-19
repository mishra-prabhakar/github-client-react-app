import React from "react";
import {render} from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import App from "./components/App";
import Search from "./components/Search";
import Commit from "./components/Commit";
import { Provider } from 'react-redux';
import store from './store';

// const routes = (
//   <BrowserRouter>
//     <div>
//       <Route path='/' component={App} />
//       <Route path='/commit/:reponame' component={Commit} />
//     </div>
//   </BrowserRouter>
// );

// const routes = () => (
//   // <Switch>
//   //   <Route exact path='/' component={App} />
//   //   <Route path='/commit/:reponame' component={Commit} />    
//   // </Switch>

//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )

const routes = (
  <Provider store={store}>
  <BrowserRouter>
    {/* <Switch>
        <Route exact path="/" component={App} />        
        <Route exact path="/commit" component={Commit} />  
    </Switch> */}
    <App/>
  </BrowserRouter>
  </Provider>
)


const rootElement = document.getElementById("root");
render( routes, rootElement );