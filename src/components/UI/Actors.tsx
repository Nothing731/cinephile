import { ImageMini } from "../../store/links"

const Actors = ({ credits }: { credits: [] }) => {
    return (
        <div className="actors">
            {credits && credits.map((actor:any, idx:number) => (
                <div className="actors__item" key={idx}>
                    <img src={ImageMini + actor.profile_path} alt="" />
                    {actor.name}
                </div>
            ))}

        </div>
    )
}

export default Actors