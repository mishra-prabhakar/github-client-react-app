import React from "react";
import Main  from "react";
import Search from "./Search";
import Header from "./Header"
import Commit from './Commit'
import { Switch, Route } from 'react-router-dom';


const App = () => (
  
    <div className="container">      
      <Header/>
      <br/>
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route exact path="/" component={Search} /> 
            <Route exact path="/search" component={Search} />  
            <Route path="/commit" component={Commit} />} />
          </Switch>
        </div>      
      </div>
    </div> 
    
)

export default App;