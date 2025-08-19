import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import { getMoviesGenero, getSeries } from "../Api/Api";
import { CardsMovie} from "./components/CardsMovie";

export const Cards = () => {
  const [series, setSeries] = useState<SeriesPopular[]>([]);
  const [horror, setHorror] = useState<SeriesPopular[]>([]);
  const [Romance, setRomance] = useState<SeriesPopular[]>([]);
  const [animation, setAnimation] = useState<SeriesPopular[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getSeries();
      setSeries(data);
      setLoading(false);
    };

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
    fetchRomanceMovies();
    fetchSeries();
  
    fetchHorrorMovies();
  }, []);

  return (
    <div>
      <CardsMovie
        title="Séries que você possa gostar"
        items={series}
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
