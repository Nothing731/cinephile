import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import searchStore, { selectFetchSearch, selectSearch } from "../store/searchStore"
import { ImageMini } from "../store/links"

const Search = () => {
  const [query, setQuery] = useState('')
  const search = searchStore(selectSearch)
  const fetchSearch = searchStore(selectFetchSearch)

  useEffect(() => {
    if (query.length > 1) fetchSearch(query)
    else fetchSearch('')
  }, [query])

  return (
    <main className="main">
      <section className="container main__search">
        <input
          type="text"
          placeholder="Найти фильм, сериал..."
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="main__search-results">
          {search && search.map((item, idx) => (
            <Link to={`/${item.name ? 'tv' : 'movie'}/${item.id}`} key={idx}>
              <img src={ImageMini + item.poster_path} alt="" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Search