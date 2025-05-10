import { ImageFull, ImageMini } from "../../store/links"
import { MovieAndTv } from "../../types/types"
import BtnMore from "../UI/BtnMore"
interface UpcomingItemProps {
  movie: MovieAndTv,
  nextMovie: MovieAndTv,
  next: () => void
}

const UpcomingItem:React.FC<UpcomingItemProps> = ({ movie, nextMovie, next }) => { 
  
  return (
    <div className="main__upcoming-item">
        <img src={ImageFull + movie.backdrop_path} alt="" />
        <div className="main__upcoming-text">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <BtnMore type="movie" id={movie.id}/>
        </div>
        <div className="main__upcoming-next" onClick={() => next()}>
          <img src={ImageMini + nextMovie.backdrop_path} alt="" />
          <div>
            <span>Следующий</span>
            <h3>{nextMovie.title}</h3>
          </div>
          <div className="line"></div>
        </div>
    </div>
  )
}

export default UpcomingItem