import { useParams } from "react-router-dom"
import ItemBlock from "../components/ItemBlock/ItemBlock"
import currentStore from "../store/currentStore"
import { useEffect } from "react"
import trailerStore from "../store/trailerStore"
import creditsStore from "../store/creditsStore"
import recStore from "../store/recStore"

const Movie = () => {
  const { id } = useParams()
  const { current, fetchCurrent } = currentStore()
  const { trailer, fetchTrailer } = trailerStore()
  const { credits, fetchCredits } = creditsStore()
  const { rec, fetchRec } = recStore()
  
  useEffect(() => {
    if(id) {
      fetchCurrent('movie', id)
      fetchTrailer('movie', id)
      fetchCredits('movie', id)
      fetchRec('movie', id)
    }
  }, [id])
  
  return (
    <main className="main">
      <section className="main__current">
        <ItemBlock active media={current} trailer={trailer} credits={credits} rec={rec}/>
      </section>
    </main>
  )
}

export default Movie