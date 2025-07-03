import { useEffect, useState } from "react";
import type { SeriesPopularCards } from "./Interfaces/Interface";
import { getSeries } from "./Api/Api";
import Page from "./props/Pagepros";
export const Cards = () => {
  const [Pages, setCurrentPage] = useState(0);
  const [series, setSeries] = useState<SeriesPopularCards[]>([]);
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
      <div className="flex flex-row items-start justify-start p-4">
        <h1 className="text-xl font-bold text-white mb-4">
          Séries que achamos que você vai gostar
        </h1>
      </div>

      <div className="mt-8 relative">
        {loading ? (
          <p className="text-white">Carregando séries...</p>
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
