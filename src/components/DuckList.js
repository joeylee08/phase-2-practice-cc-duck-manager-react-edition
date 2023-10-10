import React from 'react'
import DuckListCard from './DuckListCard'

function DuckList({ducks, handleSetFeaturedDuck}) {
  const allDucks = ducks.map((item, idx) => {
    return <DuckListCard duck={item} handleSetFeaturedDuck={handleSetFeaturedDuck} key={idx} {...item} />
  })
  return (

    <div className="duck-nav">
      {allDucks}
    </div>

  )
}

export default DuckList
