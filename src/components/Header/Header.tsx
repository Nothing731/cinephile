import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
        <nav className="header__nav container">
            <NavLink to="/"><img src="/Logo.svg" alt="" /></NavLink>
            <ul className="header__nav-list">
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/movies">Фильмы</NavLink></li>
                <li><NavLink to="/tvs">Сериалы</NavLink></li>
                <li><NavLink to="/search"><i className="fa-solid fa-magnifying-glass"></i></NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header