import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import {  getSeries, getSeriesGenero } from "../Api/Api";

import { CardsSeries } from "./components/CardsSeries";

export const CardSerie = () => {
  const [series, setSeries] = useState<SeriesPopular[]>([]);
  const [faroesteSeries, setFaroeste] = useState<SeriesPopular[]>([]);
  const [SeriesDrama, setSeriesDrama] = useState<SeriesPopular[]>([]);
const [comedySeries, setComedySeries] = useState<SeriesPopular[]>([]);
const [fictionSeries, setFictionSeries] = useState<SeriesPopular[]>([]);
const [novelaSeries, setNovelaSeries] = useState<SeriesPopular[]>([]);
const [realitySeries, setRealitySeries] = useState<SeriesPopular[]>([]);
const [animationSeries, setAnimationSeries] = useState<SeriesPopular[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getSeries();
      setSeries(data);
      setLoading(false);
    };
    const fetchRealitySeries = async () => {
      const data = await getSeriesGenero(10764);
      setRealitySeries(data);
    };
    const fetchAnimationSeries = async () => {
      const data = await getSeriesGenero(16);
      setAnimationSeries(data);
    };
    const fetchNovelaSeries = async () => {
      const data = await getSeriesGenero(10766);
      setNovelaSeries(data);
    };
    const fetchFictionSeries = async () => {
      const data = await getSeriesGenero(10765);
      setFictionSeries(data);
    };
const fetchComedySeries = async () => {
     const data = await getSeriesGenero(35);
     setComedySeries(data);
   };
   const fetchFaroesteSeries = async () => {
     const data = await getSeriesGenero(37);
     setFaroeste(data);
   }
   const fetchDramaSeries = async () => {
    const data = await getSeriesGenero(18);
    setSeriesDrama(data);
  }
  fetchRealitySeries();
  fetchNovelaSeries();
fetchFictionSeries();
fetchComedySeries();
  fetchSeries();
   fetchFaroesteSeries();
   fetchDramaSeries();
  fetchAnimationSeries();
  }, []);

  return (
    <div>
      <CardsSeries
        title="Melhores Séries"
        items={series}
        loading={loading}
      />
      <CardsSeries
        title="Novela e família"
        items={novelaSeries}
        loading={loading}
      />
      <CardsSeries
        title="Séries de Ficção Científica"
        items={fictionSeries}
        loading={loading}
      />
      <CardsSeries
        title="Séries de Comédia"
        items={comedySeries}
        loading={loading}
      />
      <CardsSeries
        title="Séries de Drama"
        items={SeriesDrama}
        loading={loading}
      />
      <CardsSeries
        title="Séries de Faroeste"
        items={faroesteSeries}
        loading={loading}
      />

   
     <CardsSeries
        title="Séries infantis e para a família"
        items={animationSeries}
        loading={loading}
      />
      
     <CardsSeries
        title="Reality Shows"
        items={realitySeries}
        loading={loading}
      />
      
    </div>
  );
};
