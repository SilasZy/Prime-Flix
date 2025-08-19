import { Link } from "react-router-dom";

// const [series, setSeries] = useState<moviePopularCards[]>([]);


import type { SeriesPopular } from "../Interfaces/Interface";

export default (props: SeriesPopular) => {
// aqui so me retorna a img do filme/Serie
    return (
        <Link to={`/detalhes_movie/${props.id}`}> 
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