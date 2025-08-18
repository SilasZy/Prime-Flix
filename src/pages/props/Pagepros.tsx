import { Link } from "react-router-dom";

// const [series, setSeries] = useState<moviePopularCards[]>([]);


import type { SeriesPopular } from "../Interfaces/Interface";

export default (props: SeriesPopular) => {
// aqui so me retorna a img do filme/Serie
    return (
       <Link to={`detalhes_movie/${props.id}`} key={props.id}>
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}  className="mt-4 h-50 w-40 object-cover" />
       </Link>
    );
};