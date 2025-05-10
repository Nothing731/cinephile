import MoviesSplide from "../components/TAM/MoviesSplide"
import TvsSplide from "../components/TAM/TvsSplide"
import Top from "../components/Top/Top"
import Upcoming from "../components/Upcoming/Upcoming"

const Home = () => {
  return (
    <main className="main">
      <Upcoming/>
      <MoviesSplide/>
      <TvsSplide/>
      <Top/>
    </main>
  )
}

export default Home