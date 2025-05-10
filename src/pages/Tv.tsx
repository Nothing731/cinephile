import { useParams } from "react-router-dom"
import ItemBlock from "../components/ItemBlock/ItemBlock"
import currentStore from "../store/currentStore"
import { useEffect } from "react"
import trailerStore from "../store/trailerStore"
import creditsStore from "../store/creditsStore"
import recStore from "../store/recStore"

const Tv = () => {
  const { id } = useParams()
  const { current, fetchCurrent } = currentStore()
  const { trailer, fetchTrailer } = trailerStore()
  const { credits, fetchCredits } = creditsStore()
  const { rec, fetchRec } = recStore()
  
  useEffect(() => {
    if(id) {
      fetchCurrent('tv', id)
      fetchTrailer('tv', id)
      fetchCredits('tv', id)
      fetchRec('tv', id)
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

export default Tv