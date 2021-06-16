import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import { fetchRepos } from '../store/action'
import List from '../components/List'

function Home () {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repo)
  const [username, setUsername] = useState('')

  console.log('=======');
  console.log('username', username);
  
  function search(event){
    event.preventDefault()
    dispatch(fetchRepos(username))
  }


  return (
    <> 
      <form onSubmit={search}>
        <div className="input-group input-group-lg mb-3 mt-5 container">
          <span className="input-group-text btn-dark" id="inputGroup-sizing-sm" name = 'username'>Username</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="username here..."
          onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </form>
      { repos.length > 0 ?
      <div className="container">
        <div className="row">
          {
          repos.map(repo => <List repo={repo} key={repo.id}/>)
          }
        </div>
      </div>
      :
      <div>
        <h1>Input github username to get the repositories</h1>
      </div> 
    }
    </>
  )
}

export default Home;
