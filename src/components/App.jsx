import React from "react";
import Main  from "react";
import Search from "./Search";
import Header from "./Header"
import Commit from './Commit'
import { Switch, Route } from 'react-router-dom';


const App = () => (
  
    <div className="container">      
      <div className="row">
        <div className="col-md-12">
          <Header/>
        </div>        
      </div>
      <br/>
      <div className="row">
        <div className="col-md-12">
          <Search/>
         {/*  
          <Switch>
            <Route exact path="/app/search" component={Search} />  
            <Route path="/app/commit" render={(props) => <Commit {...props} userName={true} />} />
          </Switch>
 */}
        </div>      
      </div>
    </div> 
    
)

export default App;