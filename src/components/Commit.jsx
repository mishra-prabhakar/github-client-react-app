import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { fetchCommits } from '../actions/postActions';

class Commit extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoaded: false,
          commitText: "",
          commits: [],
          initialCommits: []
        };
            
        //this.getCommits = this.getCommits.bind(this);
      }

     /*  getCommits ({githubUser, repoName}) {
        console.log("Get Commits name => ", repoName);
    
        fetch ("https://api.github.com/repos/" + githubUser + "/" + repoName + "/commits")
          .then ( res => res.json() )
          .then (
            (result) => {
              console.log ("Commit list => ", result);   
              this.setState ({
                isLoaded: true,
                commits: result,
                initialCommits: result
              })      
            },
            (error) => {
              console.log (`Error fetching githhub commit => ${error}`);
            }
          );
    
      };
 */
      componentWillMount() {
        //this.props.fetchCommits(this.props.location.state);
        console.log("Component will Mount");
        this.props.fetchCommits(this.props.location.state);
      };

      /* componentDidMount() {
        console.log("COMMITS COMPONENT LOADED....", this.props.location.state);
        
        this.getCommits(this.props.location.state);
      
      }; */

      handleChange({ target }) {
        this.setState({
          [target.name]: target.value
        });
      }

      handleSearch ( {target} ) {
        console.log("On Search => ", target.value);
        this.setState({
          [target.name]: target.value
        });

        const commitList = this.state.initialCommits;

        let updatedList = commitList.filter( (item) => {
          return item.commit.message.toLowerCase().search( target.value.toLowerCase() ) !== -1} 
        );

        this.setState({commits: updatedList});

      }

      render() {

        const commitItems = this.props.commits.map( (commitItem, idx) => (
          <li className="list-group-item" key={commitItem.sha}>
                {commitItem.commit.message}
          </li>
        ));

        return (          
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Header/>
              </div>              
            </div>
            <br/>

            <div className="container">
                <div className="form-inline">            
                  <div className="form-group mx-sm-2">
                    <input className = "form-control" type="search" placeholder="Search commits" aria-label="Search"
                      name="commitText"
                      value={this.state.commitText}
                      onChange={this.handleSearch.bind(this)}
                    />
                  </div>
                </div>
              
                <hr/>
                <ul className="list-group">
                {commitItems}
                </ul> 
            </div>

          </div>
        );
      }
}

const mapStateToProps = state => ({
  commits: state.commits.items
});

export default connect(mapStateToProps, { fetchCommits }) (Commit)

