import React, {useEffect} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import { fetchRepos } from '../store/action'

function Home () {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repo)

  useEffect(() => {
    dispatch(fetchRepos('ciniaeleonora'))
  }, [dispatch])

  return (
    <>    
      <p>{JSON.stringify(repos)}</p>
    </>
  )
}

export default Home;
