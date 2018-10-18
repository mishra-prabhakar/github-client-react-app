import React from "react";
import {Link} from 'react-router-dom'
import { createBrowserHistory } from 'history/createBrowserHistory'
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      isLoaded: false,
      repos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchByUser = this.searchByUser.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  searchByUser() {    
    fetch ("https://api.github.com/users/" + this.state.userName + "/repos")
      .then ( res => res.json() )
      .then (
        (result) => {
          console.log ('Result of github list => ', result);
          this.setState ({
            isLoaded: true,
            repos: result
          })
        
          //this.props.history.push("/commit");  
        },
        (error) => {
          console.log (`Error fetching githhub => ${error}`);
        }
      )      
  };
 

  render() {
    //const { userName, isLoaded, repos } = this.state;

    return (
      <div>      
          <div className="form-inline">
            
            <div className="form-group mx-sm-2">
            <input className = "form-control" type="search" placeholder="Search" aria-label="Search"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            </div>
            <button className="btn btn-outline-dark " onClick={this.searchByUser}>Search</button>
            

          </div>
    
        <hr/>
        <ul className="list-group">
        {
          this.state.repos.map( (item, idx) => (
          <li className="list-group-item" key={item.name}>
                
                <Link 
                  to={{
                    pathname: '/commit',
                    state: { githubUser: this.state.userName , repoName: item.name }
                  }}
                >
                  {item.name}
                </Link>
                
                <div>
                  {item.url}
                </div>
          </li>

          ))
        }
        </ul> 
        

      </div>
    );
  }
} //end of class Search

export default withRouter(Search);
