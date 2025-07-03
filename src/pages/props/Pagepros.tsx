

// const [series, setSeries] = useState<moviePopularCards[]>([]);


import type { SeriesPopularCards } from "../Interfaces/Interface";




export default (props: SeriesPopularCards) => {
// aqui so me retorna a img da serie
    return (
    
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}  className="mt-4 h-50 w-40 object-cover" />
         
       
    );
};