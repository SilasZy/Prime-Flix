import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import { getMoviesGenero, getSeriesGenero} from "../Api/Api";
import { CardsMovie} from "./components/CardsMovie";

import { CardsSeries } from "./components/CardsSeries";

export const Cards = () => {
 
  const [horror, setHorror] = useState<SeriesPopular[]>([]);
  const [Romance, setRomance] = useState<SeriesPopular[]>([]);
  const [animation, setAnimation] = useState<SeriesPopular[]>([]);
  const [loading, setLoading] = useState(true);
  const [Guerra, setGuerra] = useState<SeriesPopular[]>([]);
  const [comedySeries, setComedySeries] = useState<SeriesPopular[]>([]);
  useEffect(() => {
    const fetchWarMovies = async () => {
      const data = await getMoviesGenero(10752); // gênero: Guerra
      setGuerra(data);
      setLoading(false);
    };
    const fetchComedySeries = async () => {
      const data = await getSeriesGenero(35); // gênero: Comédia
      setComedySeries(data);
    }

    const fetchHorrorMovies = async () => {
      const data = await getMoviesGenero(27); // gênero: Terror
      setHorror(data);
    };

    const fetchRomanceMovies = async () => {
      const data = await getMoviesGenero(10749); // gênero: Romance
      setRomance(data);
    }
const fetchAnimationMovies = async () => {
  const data = await getMoviesGenero(16); // gênero: Romance
  setAnimation(data);
}
fetchAnimationMovies();
fetchComedySeries();
    fetchRomanceMovies();
    fetchWarMovies();
    fetchHorrorMovies();
  }, []);

  return (
    <div>
      <CardsSeries
        title="Séries de Comédia para a família"
        items={comedySeries}
        loading={loading}
      />
      <CardsMovie
        title="Guerra e Sangue"
        items={Guerra}
        loading={loading}
      />
      <CardsMovie
        title="Mais Recentes Terror"
        items={horror}
        loading={loading}
      />
      <CardsMovie
        title="Mais Recentes Romance"
        items={Romance}
        loading={loading}
      />
      <CardsMovie
        title="Mais Recentes Animações"
        items={animation}
        loading={loading}
      />
    </div>
  );
};
