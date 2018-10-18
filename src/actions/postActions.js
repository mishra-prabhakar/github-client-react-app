import { FETCH_COMMITS, SEARCH_REPO } from './types';

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