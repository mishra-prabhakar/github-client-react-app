import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { fetchCommits, filterCommits, updateField } from '../actions/action';
import InfiniteScroll from "react-infinite-scroll-component";

class Commit extends React.Component {
    constructor(props) {
        super(props);
      }

      componentWillMount() {
        this.props.fetchCommits(this.props.location.state);        
      };

      handleOnChange = ( {target} ) => {        
        this.props.updateField(target.name, target.value);
        this.props.filterCommits(target.value)
      }

      fetchMore = () => {
        this.props.fetchCommits(this.props.location.state);
      }

      render() {
        
        const commitItems = this.props.commits.map( (commitItem, idx) => (
          
            <tr key={idx}>
              <td>
              {idx+1}            
              </td>
              <td>
              {commitItem.commit.message}            
              </td>
              <td>
              {commitItem.sha}
              </td>
              <td>
              {commitItem.commit.author.name}
              </td>
            </tr>
          
        ));

        return (          
          
            <div className="container">
                <div className="form-inline">            
                  <div className="form-group mx-sm-2">
                    <input className = "form-control" type="search" placeholder="Search commit message" aria-label="Search"
                      name="commitText"
                      value={this.props.commitText}                     
                      onChange={this.handleOnChange}
                    />
                  </div>
                </div>
              
                <hr/>
                <p>Showing result for Github User: <span className="gc-label-bold">{this.props.location.state.githubUser}</span> 
                  &nbsp;and Repository: <span className="gc-label-bold">{this.props.location.state.repoName}</span>
                </p>

                 <InfiniteScroll
                  dataLength={this.props.commits.length}
                  next={this.fetchMore}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                >
                <table className="table table-hover table-sm table-font">
                  <thead>
                    <tr>
                      <th scope="col">#</th>                    
                      <th scope="col" className="col-md-6">Message</th>
                      <th scope="col" className="col-md-2">Commit Id</th>
                      <th scope="col" className="col-md-2">Author</th>
                    </tr>
                  </thead>
                  <tbody>                
                    {commitItems}                                
                  </tbody>
                </table>
                </InfiniteScroll>
            </div>
          
        );
      }
}

const mapStateToProps = state => ({
  commits: state.reducer.commits,
  githubUser: state.reducer.userName
});

export default connect(mapStateToProps, { fetchCommits, filterCommits, updateField }) (Commit)

