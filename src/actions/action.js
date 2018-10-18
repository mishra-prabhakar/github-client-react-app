import { FETCH_COMMITS, FETCH_REPOS, FILTER_COMMITS } from './types';

export const fetchCommits = ({githubUser, repoName}) => dispatch => {
    console.log("POst actions -> ", githubUser, repoName);
    fetch ("https://api.github.com/repos/" + githubUser + "/" + repoName + "/commits")
        .then ( res => res.json() )
        .then (
        (commits) => {
            console.log ("Commit list => ", commits);   
            dispatch({
            type: FETCH_COMMITS,
            payload: commits
            })      
        },
        (error) => {
            console.log (`Error fetching githhub commit => ${error}`);
        }
        );
};

export const fetchRepos = (githubUser) => dispatch => {
    console.log("Fetch Repos ==> ");
    fetch ("https://api.github.com/users/" + githubUser + "/repos")
      .then ( res => res.json() )
      .then (
        (repos) => {
          console.log ('Result of github list => ', repos);
          dispatch({
            type: FETCH_REPOS,
            payload: repos
         })           
        },
        (error) => {
          console.log (`Error fetching githhub repos => ${error}`);
        }
      )
};

export const filterCommits = (searchValue) => (dispatch, getState) => {
  console.log("Filtering commits ==> ", getState().reducer.initialCommits);
  const commitList = getState().reducer.initialCommits;
  let updatedList = commitList.filter( (item) => {
    return item.commit.message.toLowerCase().search( searchValue.toLowerCase() ) !== -1} 
  );

  dispatch ({
    type: FILTER_COMMITS,
    payload: updatedList
  })
};