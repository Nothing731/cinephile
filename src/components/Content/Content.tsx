import { Link } from "react-router-dom"
import popularStore from "../../store/popularStore"
import { useEffect, useState } from "react"
import { MovieAndTv } from "../../types/types"
import { ImageMini } from "../../store/links"

const Content = ({ type }: { type: string }) => {
    const { fetchPopular, popularMovies, popularTvs } = popularStore()
    const [media, setMedia] = useState<MovieAndTv[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(500)
    useEffect(() => {
        fetchPopular(type, currentPage)
        if (type === 'movie') setMedia(popularMovies)
        else setMedia(popularTvs)
    }, [popularMovies, popularTvs, currentPage])
    const changePage = (dir:string) => {
        if(dir === 'next') setCurrentPage(currentPage + 1)
        else setCurrentPage(currentPage - 1)   
        window.scroll(0, 0)
    }
    return (
        <section className="container media">
            <h2>Все {type === 'movie' ? 'фильмы' : 'сериалы'}</h2>
            <div className="main__search-results media__content">
                {media && media.map((item, idx) => (
                    <Link to={`/${type}/${item.id}`} key={idx}>
                        <img src={ImageMini + item.poster_path} alt="" />
                    </Link>
                ))
                }
            </div>
            <div className="media__content-pagination">
                <button onClick={() => changePage('back')} disabled={currentPage === 1}>BACK</button>
                <output>Страница: {currentPage} - {totalPages}</output>
                <button onClick={() => changePage('next')} disabled={currentPage === totalPages}>NEXT</button>
            </div>
        </section>
    )
}

export default Content