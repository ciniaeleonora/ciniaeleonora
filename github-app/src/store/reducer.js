import {
  SET_REPO,
  SET_REPO_ERROR,
  SET_REPO_LOADING
} from '../action'

const initialState = {
  repo: {},
  repoLoading: false,
  repoError: null,
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_REPO:
      return {...state, repo: payload}
    case SET_REPO_ERROR:
      return {...state, repoError: payload}
    case SET_REPO_LOADING:
      return {...state, repoLoading: payload}  
    default: 
      return state
  }
}

export default reducer