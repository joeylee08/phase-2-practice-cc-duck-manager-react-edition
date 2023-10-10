import React, { useState } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {
  const fetchUrl = "http://localhost:4001/ducks";

  //pass to DuckList to render all ducks
  const [ducks, setDucks] = useState([])

  //set FeaturedDuck to first duck upon fetch
  //pass to DuckDisplay to render featured duck
  const [featuredDuck, setFeaturedDuck] = useState({})

  //pass to DuckForm to toggle form visibility
  const [duckFormOpen, setDuckFormOpen] = useState(false)

  useState(() => {
    fetch(fetchUrl)
      .then(res => res.json())
      .then(ducksArr => {
        setDucks(ducksArr)
        setFeaturedDuck(ducksArr[0])
      })
  }, [])

  //pass to DuckList > DuckListCard for onClick
  function handleSetFeaturedDuck(duck) {
    setFeaturedDuck(duck)
  }


  //pass to DuckForm to toggle visibility
  function handleSetDuckFormOpen() {
    setDuckFormOpen(() => !duckFormOpen)
  }

  //passed to DuckList > DuckListCard to add onClick to each duck
  //send PATCH request with 'likes', update said duck in setDucks state
  function handleLikes(id, likes) {
    fetch(`${fetchUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
    .then(res => res.json())
    .then(updated => {
      const updatedDucks = ducks.map(item => {
        if (item.id !== id) return item
        else return updated
      })
      setDucks(() => updatedDucks)
      setFeaturedDuck(updated)
    })
  }

  //handle submit, passed to DuckForm
  //POST to db, update setDucks state with new duck
  function handleSubmit() {

  }

  return (
    <div className="App">
      <h1>Duck Manager 2022 - React Edition</h1>
      <DuckList ducks={ducks} handleSetFeaturedDuck={handleSetFeaturedDuck}/>
      <DuckDisplay {...featuredDuck} handleLikes={handleLikes}/>
      <button onClick={handleSetDuckFormOpen} >Open Duck Form</button>
      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      <DuckForm duckFormOpen={duckFormOpen} />
    </div>
  );
}

export default App;
