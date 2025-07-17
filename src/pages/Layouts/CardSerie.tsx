import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import {  getSeries, getSeriesGenero } from "../Api/Api";

import { CardsSeries } from "./components/CardsSeries";

export const CardSerie = () => {
  const [series, setSeries] = useState<SeriesPopular[]>([]);
  const [faroeste, setFaroeste] = useState<SeriesPopular[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getSeries();
      setSeries(data);
      setLoading(false);
    };

   const fetchNovelaSeries = async () => {
     const data = await getSeriesGenero(37);
     setFaroeste(data);
   }



   fetchNovelaSeries();
    fetchSeries();
  
  
  }, []);

  return (
    <div>
      <CardsSeries
        title="Melhores Séries"
        items={series}
        loading={loading}
      />
      <CardsSeries
        title="Faroeste"
        items={faroeste}
        loading={loading}
      />

      
    </div>
  );
};
