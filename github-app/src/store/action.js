export const SET_REPO = 'repo/setRepo'
export const SET_REPO_ERROR = 'repo/setRepoError'
export const SET_REPO_LOADING = 'repo/setRepoLoading'


export function setRepos(payload) {
  return {type: SET_REPO, payload}
}
export function setReposError(payload) {
  return {type: SET_REPO_ERROR, payload}
}
export function setReposLoading(payload) {
  return {type: SET_REPO_LOADING, payload}
}


export function fetchRepos(user) {
  return (dispatch) => {
    dispatch(setRepoLoading(true))
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(result => dispatch(setRepos(result)))
      .catch(err => dispatch(setReposError(err)))
      .finally((_) => dispatch(setReposLoading(false)))
  }  
}