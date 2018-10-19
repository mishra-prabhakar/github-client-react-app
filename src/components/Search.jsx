import React from "react";
import {Link} from 'react-router-dom'

import { connect } from 'react-redux';
import { fetchRepos } from '../actions/action';



class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      isLoaded: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchByUser = this.searchByUser.bind(this);
  }

  searchByUser() {
    this.props.fetchRepos(this.state.userName);
  };

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }


  render() {
    
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
          this.props.repos.map( (item, idx) => (
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
                  {item.html_url}
                </div>
          </li>

          ))
        }
        </ul> 
        

      </div>
    );
  }
} //end of class Search

const mapStateToProps = state => ({
  repos: state.reducer.repos
});

export default connect(mapStateToProps, { fetchRepos }) (Search)