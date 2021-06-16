import React from 'react'

function GalleryCard({repo}) {
  return (
    <div className="col-md-4 mt-5" >
      <div className="card rounded-3" style={{borderBlockColor:'#C8C2BC'}}>
        <img  className="rounded-3 card-img-overlay" src={repo.owner.avatar_url} width = "60" height="60" alt={repo.owner.login}/>
        <a href={repo.owner.html_url}> {repo.owner.login}</a>
        <h4> {repo.name} </h4>
      </div>
    </div>
  )
}

export default GalleryCard