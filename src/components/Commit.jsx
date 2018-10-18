import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { fetchCommits, filterCommits } from '../actions/action';

class Commit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          isLoaded: false,
          commitText: "",
          commits: [],
          initialCommits: []
        };
      }

      componentWillMount() {
        this.props.fetchCommits(this.props.location.state);        
      };

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

        this.props.filterCommits(target.value)
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
  commits: state.reducer.commits
});

export default connect(mapStateToProps, { fetchCommits, filterCommits }) (Commit)

