import { useEffect, useState } from "react"
import upcomingStore from "../../store/upcomingStore"
import UpcomingItem from "./UpcomingItem"

const Upcoming = () => {
  const {upcoming, fetchUpcoming} = upcomingStore()
  
  useEffect(() => {
    fetchUpcoming()
  }, [])
  
  const [slideView, setSlideView] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(upcoming.length > 0){
        if (slideView < upcoming.length - 1) {
          setSlideView(slideView + 1)
        } else {
          setSlideView(0)
        }
      }
    }, 10000);
    return () => clearInterval(interval)
  }, [slideView, upcoming])
  
  
  const nextMovieHandler = () => {
    setSlideView((prevSlide) => prevSlide === upcoming.length - 1 ? 0 : prevSlide + 1)
  }
  
  
  return (
    <section className="main__upcoming">
      {upcoming && upcoming.map((movie, idx) => (
          <div className={`main__upcoming-animate ${slideView === idx ? 'active' : ''}`} key={idx}>
            <UpcomingItem next={nextMovieHandler} movie={movie} nextMovie={upcoming[idx === upcoming.length - 1 ? 0 : idx + 1]}/>
          </div>
      )) }
    </section>
  )
}

export default Upcoming