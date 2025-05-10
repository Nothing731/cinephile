import { useEffect, useState } from "react"
import popularStore from "../../store/popularStore"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import { ImageMini } from "../../store/links";
import ItemBlock from "../ItemBlock/ItemBlock";
import { MovieAndTv } from "../../types/types";
import creditsStore from "../../store/creditsStore";

interface IContentProps {
  type: string
}

const Content: React.FC<IContentProps> = ({ type }) => {
 const {popularMovies, popularTvs, fetchPopular} = popularStore()

  useEffect(() => {
    fetchPopular(type)
  }, [])

  const [active, setActive] = useState(false)
  const [media, setMedia] = useState<null | MovieAndTv>(null)
  const {credits, fetchCredits} = creditsStore()
  const getMedia = (item:MovieAndTv, type:string) => {
    if(type === 'movie') {
      setMedia(item) 
      fetchCredits(type, item.id, 4)
    }
    else {
      setMedia(item) 
      fetchCredits(type, item.id, 4)
    }
    setActive(true)
  }
  
  const closeMediaHandler = () => setActive(false)
  
  return (
    <section className="main__content">
      <h2>{type === 'movie' ? 'Фильмы' : 'Сериалы'}<i className="fa-solid fa-chevron-right"></i></h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={5.5}
        pagination={false}
        navigation={true}
        loop={true}
        className="main__content-swiper"
      >
        { type === 'movie' ? popularMovies.map((item, idx) => (
           <SwiperSlide className="main__content-swiper-slide" key={idx} onClick={() => getMedia(item, type)}>
             <img src={ImageMini + item.poster_path} alt="" />
           </SwiperSlide>
        )) :  popularTvs.map((item, idx) => (
          <SwiperSlide className="main__content-swiper-slide" key={idx} onClick={() => getMedia(item, type)}>
             <img src={ImageMini + item.poster_path} alt="" />
           </SwiperSlide>
        ))}
      </Swiper>
      <ItemBlock active={active} media={media} close={closeMediaHandler} credits={credits}/>
    </section>
  )
}

export default Content