import { Link } from "react-router-dom";
import type { SeriesPopular } from "../Interfaces/Interface";

export default (props: SeriesPopular) => {
  return (
    <Link to={`/detalhes_serie/${props.id}`}>
      <div className="w-[120px] h-[180px] sm:w-[100px] sm:h-[150px] md:w-[140px] md:h-[210px]">
        <img
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          className="w-full h-full object-cover rounded-lg"
          alt={props.name}
        />
      </div>
    </Link>
  );
};
