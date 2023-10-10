import React from 'react'

function DuckDisplay({id, name, img_url, likes, handleLikes}) {
  return (
    <div className="duck-display">
      <h2>{name}</h2>
      <img src={img_url} alt={name} />
      <button onClick={() => handleLikes(id, likes)}>{likes} likes</button>
    </div>
  )
}

export default DuckDisplay
