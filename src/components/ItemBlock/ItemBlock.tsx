import { Link } from "react-router-dom"
import { ImageFull, ImageMini } from "../../store/links"
import { MovieAndTv } from "../../types/types"
import Actors from "../UI/Actors"
import BtnMore from "../UI/BtnMore"

interface IItemBlockProps{
  active: boolean
  media: null | MovieAndTv
  close?: () => void
  trailer?: string
  credits: []
  rec: MovieAndTv[]
}

const ItemBlock:React.FC<IItemBlockProps> = ({ active, media, close, trailer, credits, rec }) => {
  return (
<>
    <div className={`media__info ${active && 'active'}`}>
        {close && <i onClick={close} className="fa-solid fa-circle-xmark"></i>}
        { media && (
          <div className="media__info-content">
            <img src={ImageFull + media.backdrop_path} alt="image" className="blur"/>
            {!close && <img src={ImageMini + media.poster_path} alt="image"/>}
            <div className="media__info-content-block">
                <h3>{media.title || media.name}</h3>
                <p>{media.overview || 'Описание не найдено...'}</p>
                <span>
                  {new Date(media.release_date || media.first_air_date).getFullYear()}
                  {media.genres && ', ' + media.genres.map((genre:any) => (genre.name)).join(' | ') + ' | '}
                  {media.runtime && `${Math.floor(media.runtime / 60)}h ${Math.floor(media.runtime % 60)}m`}
                </span>
               {close && <Actors credits={credits} />}
               {close ? 
                <BtnMore type={media.name ? 'tv' : 'movie'} id={media.id}/>
                : trailer && <a target="_blank" href={`https://www.youtube.com/watch?v=${trailer}`} className="more-btn"><i className="fa-solid fa-play"></i>Смотреть трейлер</a>
               }
               {!close && <h4>В главных ролях</h4>}
               {!close && <Actors credits={credits}/>}
            </div>
        </div>
        ) }
    </div>
   {!close && media && 
   <>
    <div className="media__mid">
        <div className="media__mid-item">
          <h3>Бюджет</h3>
          <p>{media.budget?.toLocaleString("en-US") || 'Неизвестно'}</p>
        </div>
        <div className="media__mid-item">
          <h3>Сборы</h3>
          <p>{media.revenue?.toLocaleString("en-US") || 'Неизвестно'}</p>
        </div>
        <div className="media__mid-item">
          <h3>Статус</h3>
          <p>{media.status || 'Неизвестно'}</p>
        </div>
        <div className="media__mid-item">
          <h3>Исходное название</h3>
          <p>{media.original_title || 'Неизвестно'}</p>
        </div>
      </div>
      <div className="container main__search-results media__rec">
        <h2>Рекоммендации</h2>
        {rec && rec.map((item,idx) => (
          <Link to={`/${item.media_type}/${item.id}`} key={idx}>
              <img src={ImageMini + item.poster_path} alt="" />
          </Link>
        ))}
      </div>
   </>
  }
</>
)
}

export default ItemBlock