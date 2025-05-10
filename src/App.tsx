import { Route, BrowserRouter, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Movies from "./pages/Movies"
import Tvs from "./pages/Tvs"
import Movie from "./pages/Movie"
import Tv from "./pages/Tv"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvs" element={<Tvs/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/tv/:id" element={<Tv/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App