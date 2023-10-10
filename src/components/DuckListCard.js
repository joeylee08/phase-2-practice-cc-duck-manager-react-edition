function DuckListCard({name, img_url, handleSetFeaturedDuck, duck}) {
  return (
    <img src={img_url} alt={name} onClick={() => handleSetFeaturedDuck(duck)} />
  )
}

export default DuckListCard
