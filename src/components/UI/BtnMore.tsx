import { Link } from "react-router-dom"
interface IBtnMoreProps{
    type:string
    id:number
}
const BtnMore:React.FC<IBtnMoreProps> = ({type, id}) => {
  return (
    <Link to={`/${type}/${id}`} className="more-btn"> 
        <i className="fa-solid fa-bars"></i>
        Подробнее
    </Link>
  )
}

export default BtnMore