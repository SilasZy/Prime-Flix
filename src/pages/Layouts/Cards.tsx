import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import { getSeries } from "../Api/Api";
import Page from "../props/Pagepros";
import { Loading } from "./components/Loading";
export const Cards = () => {
  const [Pages, setCurrentPage] = useState(0);
  const [series, setSeries] = useState<SeriesPopular[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 9;
  const totalPages = Math.round(series.length / itemsPerPage);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getSeries();
      setSeries(data);
      setLoading(false);
    };

    fetchSeries();
  }, []);
// resolver isso de pagina no proprio botao aqui de ir e voltar ; 
// as paginas tao sendo mudadas aqui 


    const paginatedSeries = series.slice(
    Pages * itemsPerPage,
    (Pages + 1) * itemsPerPage
  );

  const nextSlide = () => {
    setCurrentPage((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  }
  const prevSlide = () => {
    setCurrentPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  return (
    <div>
     
      <div className="mt-8 relative">
         <h1 className="text-white  font-medium text-2xl">Melhores Séries</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-row gap-4 items-center overflow-x-auto scrollbar-hide">
            {/* Botão anterior */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
              aria-label="Anterior"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Cards */}
            <div className="flex flex-row gap-4 w-full justify-center">
              {paginatedSeries.map((serie) => (
                <Page
                  key={serie.id}
                  id={serie.id}
                  name={serie.name}
                  poster_path={serie.poster_path}
                  first_air_date={serie.first_air_date}
                  overview={serie.overview}
                  vote_average={serie.vote_average}
                />
              ))}
            </div>

            {/* Botão próximo */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
              aria-label="Próximo"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
