 export type MoviePopular = {
    id: number;
    title: string;
    poster_path: string | null;
    release_date: string;
    overview: string;
    vote_average: number;
};

// aqui ja é diferente aqui me retorna o name da serie                
export type SeriesPopularCards = {
    id: number;
    name: string;
    poster_path: string | null;
    first_air_date: string;
    overview: string;
    vote_average: number;
    //possivelmente pegar por genero
    // genre_ids: number[];
};
