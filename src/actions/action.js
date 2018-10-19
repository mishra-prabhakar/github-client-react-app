import { FETCH_COMMITS, FETCH_REPOS, FILTER_COMMITS } from './types';

export const fetchCommits = ({githubUser, repoName}) => (dispatch, getState) => { //#ES6_Feature Function parameter using Object destructuring.

    let commitLen = getState().reducer.commits.length;
    let pgCount = commitLen > 0 ? (commitLen/20)+1 : 1;
    let initialCommits = getState().reducer.commits;

    fetch (`https://api.github.com/repos/${githubUser}/${repoName}/commits?per_page=20&page=${pgCount}`) //#ES6_Feature Template literal and string interpolation. No need to use + operator and then close, unclose quot mark in the string.
        .then ( res => res.json() )
        .then (
        (commits) => {            
            dispatch({
              type: FETCH_COMMITS,
              payload: [...initialCommits, ...commits] //#ES6_Feature Spread Operator to concatenate array. As per mozilla doc, it is a better and cleaner way to concatenate.
            })      
        },
        (error) => {
            console.log (`Error fetching githhub commit => ${error}`);
        }
        );
};

export const fetchRepos = (githubUser) => dispatch => {
    
    fetch (`https://api.github.com/users/${githubUser}/repos`)
      .then ( res => res.json() )
      .then (
        (repos) => {
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
  
  const commitList = getState().reducer.initialCommits;
  let updatedList = commitList.filter( (item) => {
    return item.commit.message.toLowerCase().search( searchValue.toLowerCase() ) !== -1} 
  );

  dispatch ({
    type: FILTER_COMMITS,
    payload: updatedList
  })
};