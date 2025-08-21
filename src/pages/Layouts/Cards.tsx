import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import { getMoviesGenero, getSeries, getSeriesGenero} from "../Api/Api";
import { CardsMovie} from "./components/CardsMovie";

import { CardsSeries } from "./components/CardsSeries";

export const Cards = () => {
 
  const [horror, setHorror] = useState<SeriesPopular[]>([]);
  const [Romance, setRomance] = useState<SeriesPopular[]>([]);
  const [animation, setAnimation] = useState<SeriesPopular[]>([]);
  const [loading, setLoading] = useState(true);
  const [Guerra, setGuerra] = useState<SeriesPopular[]>([]);
  const [comedySeries, setComedySeries] = useState<SeriesPopular[]>([]);
  const [series, setSeries] = useState<SeriesPopular[]>([]);
  const [aventura, setAventura] = useState<SeriesPopular[]>([]);
  const [suspense, setSuspense] = useState<SeriesPopular[]>([]);
  const [fantasia, setFantasia] = useState<SeriesPopular[]>([]);
  const [acao, setAcao] = useState<SeriesPopular[]>([]);
  const [comedia, setComedia] = useState<SeriesPopular[]>([]);
  const [crime, setCrime] = useState<SeriesPopular[]>([]);
  const [documentario, setDocumentario] = useState<SeriesPopular[]>([]);
  const [faroeste, setFaroeste] = useState<SeriesPopular[]>([]);
  useEffect(() => {
    const fetchWarMovies = async () => {
      const data = await getMoviesGenero(10752); // gênero: Guerra
      setGuerra(data);
      setLoading(false);
    };

    const fetchFaroesteMovies = async () => {
      const data = await getMoviesGenero(37); // gênero: Faroeste
      setFaroeste(data);
    };

    const fetchComediaMovies = async () => {
      const data = await getMoviesGenero(35); // gênero: Comédia
      setComedia(data);
    };
    const fetchCrimeMovies = async () => {
      const data = await getMoviesGenero(80); // gênero: Crime
      setCrime(data);
    };
    const fetchDocumentarioMovies = async () => {
      const data = await getMoviesGenero(99); // gênero: Documentário
      setDocumentario(data);
    };
    const fetchSuspenseMovies = async () => {
      const data = await getMoviesGenero(53); // gênero: Suspense
      setSuspense(data);
    };
    const fetchAcaoMovies = async () => {
      const data = await getMoviesGenero(28); // gênero: Ação
      setAcao(data);
    };
    const fetchFantasiaMovies = async () => {
      const data = await getMoviesGenero(14); // gênero: Fantasia
      setFantasia(data);
    };
    const fetchAventuraMovies= async () => {
      const data = await getMoviesGenero(12); // gênero: Aventura
      setAventura(data);
    };
   const fetchSeriesBest = async () => {
      const data = await getSeries();
      setSeries(data);
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


fetchComediaMovies();
fetchCrimeMovies();
fetchDocumentarioMovies();
fetchAventuraMovies();
fetchSeriesBest();
fetchFaroesteMovies();
fetchAnimationMovies();
fetchComedySeries();
    fetchRomanceMovies();
    fetchWarMovies();
    fetchHorrorMovies();
    fetchSuspenseMovies();
    fetchFantasiaMovies();
    fetchAcaoMovies();
  }, []);

  return (
    <div>

      <CardsSeries
        title="Melhores Séries"
        items={series}
        loading={loading}
      />

        <CardsMovie
        title="No Velho Oeste"
        items={faroeste}
        loading={loading}
      />

      <CardsMovie
        title="Rir Até Ter Medo"
        items={comedia}
        loading={loading}
      />
   
  
      <CardsMovie
        title="Mais Recentes Ação"
        items={acao}
        loading={loading}
      />
      <CardsMovie
        title="Além da Imaginação"
        items={fantasia}
        loading={loading}
      />

         <CardsMovie
        title="Mundo do Crime"
        items={crime}
        loading={loading}
      />
      <CardsMovie
        title="Emoção a Cada Segundo"
        items={suspense}
        loading={loading}
      />
      <CardsMovie
        title="Diversão em Família"
        items={aventura}
        loading={loading}
      />
 
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
          <CardsMovie
        title="Documentários"
        items={documentario}
        loading={loading}
      />
    </div>
  );
};
