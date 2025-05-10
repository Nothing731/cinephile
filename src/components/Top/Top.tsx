import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import topStore, { selectFetchTop, selectTop } from "../../store/topStore"
import { useEffect } from "react"
import { ImageMini } from "../../store/links"
import { Link } from "react-router-dom"
const Top = () => {
  const top = topStore(selectTop)
  const fetchTop = topStore(selectFetchTop)
  useEffect(() => {
    fetchTop()
  }, [])
  
  return (
    <section className="main__top">
        <h2>ТОП <span>10</span></h2>
        <Swiper
            slidesPerView={3.4}
            loop
            modules={[Navigation]}
            autoplay
            navigation
            className="top__slider"
            spaceBetween={24}
        >
          {top && top.map((item, idx) => (
            <SwiperSlide className="top__slider-item">
              <Link to={'movie/' + item.id}>
                  <span>{++idx}</span>
                  <img src={ImageMini + item.poster_path} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}

export default Top