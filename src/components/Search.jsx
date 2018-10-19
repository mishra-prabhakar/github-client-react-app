import React from "react";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { fetchRepos, updateField } from '../actions/action';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

   /*
    #ES6_Feature. Arrow function, in this particular case we can avoid binding step required for searchByUser function because arrow function do not have their own context.
    If we don't use arrow function, we will have to first bind the function like this this.searchByUser = this.searchByUser.bind(this);
  */
  searchByUser = () => {    
    this.props.fetchRepos();
  };

  handleChange = ({ target }) => {   
    this.props.updateField(target.name, target.value);
  }


  render() {
    
    return (
      <div>      
          <div className="form-inline">
            
            <div className="form-group mx-sm-2">
            <input className = "form-control" type="search" placeholder="Search" aria-label="Search"
              name="userName"
              value={this.props.userName}
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
                    state: { githubUser: this.props.githubUser, repoName: item.name }
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
  repos: state.reducer.repos,
  githubUser: state.reducer.userName
});

export default connect(mapStateToProps, { fetchRepos, updateField }) (Search)