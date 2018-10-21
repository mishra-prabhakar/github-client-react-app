import React from "react";
import RepoList from "./RepoList";
import Header from "./Header"
import CommitList from './CommitList'
import { Switch, Route } from 'react-router-dom';


const App = () => (
  
    <div className="container">      
      <Header/>
      <br/>
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route exact path="/" component={RepoList} /> 
            <Route exact path="/search" component={RepoList} />  
            <Route path="/commit" component={CommitList} />} />
          </Switch>
        </div>      
      </div>
    </div> 
    
)

export default App;