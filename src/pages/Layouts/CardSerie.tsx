import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import {  getSeries, getSeriesGenero } from "../Api/Api";

import { CardsSeries } from "./components/CardsSeries";

export const CardSerie = () => {
  const [series, setSeries] = useState<SeriesPopular[]>([]);
  const [faroesteSeries, setFaroeste] = useState<SeriesPopular[]>([]);
  const [SeriesDrama, setSeriesDrama] = useState<SeriesPopular[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getSeries();
      setSeries(data);
      setLoading(false);
    };

   const fetchFaroesteSeries = async () => {
     const data = await getSeriesGenero(37);
     setFaroeste(data);
   }
   const fetchDramaSeries = async () => {
    const data = await getSeriesGenero(16);
    setSeriesDrama(data);
  }


  fetchSeries();
   fetchFaroesteSeries();
   fetchDramaSeries();
  
  }, []);

  return (
    <div>
      <CardsSeries
        title="Melhores Séries"
        items={series}
        loading={loading}
      />
      <CardsSeries
        title="Séries de Faroeste"
        items={faroesteSeries}
        loading={loading}
      />
     <CardsSeries
        title="Séries infantis e para a família"
        items={SeriesDrama}
        loading={loading}
      />
      
    </div>
  );
};
