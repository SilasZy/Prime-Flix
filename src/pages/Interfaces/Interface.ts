export type MoviePopular = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
  cast: Elenco[]; // ⬅️ Adicionado aqui
};
// aqui ja é diferente aqui me retorna o name da serie                
export type SeriesPopular = {
  media_type: string;
    id: number;
    name?: string;
    poster_path: string | null;
    first_air_date: string;
    overview: string;
    vote_average: number;
  title?: string;
  items: SeriesPopular[];
  loading: boolean;
  itemsPerPage?: number;


    //possivelmente pegar por genero
    // genre_ids: number[];
};

export type Elenco = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

