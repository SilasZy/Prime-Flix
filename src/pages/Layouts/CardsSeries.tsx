import { useEffect, useState } from "react";
import type { SeriesPopular } from "../Interfaces/Interface";
import { getMoviesGenero, getSeries } from "../Api/Api";
import Page from "../props/Pagepros";
import { Loading } from "./components/Loading";
export const CardsSeries = () => {
  const [Pages, setCurrentPage] = useState(0);
  const [horrorPage, setHorrorPage] = useState(0);
  const [RomancePage, setRomancePage] = useState(0);

  const [series, setSeries] = useState<SeriesPopular[]>([]);
  const [Horror, setHorror] = useState<SeriesPopular[]>([]);
  
  // const [Action, setAction] = useState<SeriesPopular[]>([]);
  // const [Drama, setDrama] = useState<SeriesPopular[]>([]);

  // const [Comedy, setComedy] = useState<SeriesPopular[]>([]);
const [Romance, setRomance] = useState<SeriesPopular[]>([]);
  const [loading, setLoading] = useState(true);
   


  const itemsPerPage = 9;

  const totalPages = Math.round(series.length / itemsPerPage);
  const totalHorrorPages = Math.ceil(Horror.length / itemsPerPage);
 
  const totalRomancePages = Math.ceil(Romance.length / itemsPerPage);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getSeries();
      setSeries(data);
      setLoading(false);
    };
    const fetchHorrorMovies = async () => {
      const data = await getMoviesGenero(27);
      setHorror(data);
      setLoading(false);
    };
    const fetchRomanceMovies = async () => {
      const data = await getMoviesGenero(10749);
      setRomance(data);
      setLoading(false);
    };

fetchRomanceMovies();
    fetchSeries();
    fetchHorrorMovies();
  }, []);




  // resolver isso de pagina no proprio botao aqui de ir e voltar ; 
  // as paginas tao sendo mudadas aqui 


    const paginatedSeries = series.slice(
    Pages * itemsPerPage,
    (Pages + 1) * itemsPerPage
  );

const paginatedHorror = Horror.slice(
  horrorPage * itemsPerPage,
  (horrorPage + 1) * itemsPerPage
);
const paginatedRomance = Romance.slice(
  RomancePage * itemsPerPage,
  (RomancePage + 1) * itemsPerPage
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
const nextSlideHorror = () => {
  setHorrorPage((prev) => (prev === totalHorrorPages - 1 ? 0 : prev + 1));
};

const prevSlideHorror = () => {
  setHorrorPage((prev) => (prev === 0 ? totalHorrorPages - 1 : prev - 1));
};
const nextSlideRomance = () => {
  setRomancePage((prev) => (prev === totalRomancePages - 1 ? 0 : prev + 1));
};

const prevSlideRomance = () => {
  setRomancePage((prev) => (prev === 0 ? totalRomancePages - 1 : prev - 1));
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
                  vote_average={serie.vote_average} title={""} items={[]} loading={false}                />
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
<div>

<div className="mt-8 relative">
         <h1 className="text-white  font-medium text-2xl">Mais Recentes Terror</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-row gap-4 items-center overflow-x-auto scrollbar-hide">
            {/* Botão anterior */}
            <button
              onClick={prevSlideHorror}
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
              {paginatedHorror.map((serie) => (
                <Page
                  key={serie.id}
                  id={serie.id}
                  name={serie.name}
                  poster_path={serie.poster_path}
                  first_air_date={serie.first_air_date}
                  overview={serie.overview}
                  vote_average={serie.vote_average} title={""} items={[]} loading={false}                />
              ))}
            </div>

            {/* Botão próximo */}
            <button
              onClick={nextSlideHorror}
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



<div className="mt-8 relative">
         <h1 className="text-white  font-medium text-2xl">Mais Recentes Romance</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-row gap-4 items-center overflow-x-auto scrollbar-hide">
            {/* Botão anterior */}
            <button
              onClick={prevSlideRomance}
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
              {paginatedRomance.map((serie) => (
                <Page
                  key={serie.id}
                  id={serie.id}
                  name={serie.name}
                  poster_path={serie.poster_path}
                  first_air_date={serie.first_air_date}
                  overview={serie.overview}
                  vote_average={serie.vote_average} title={""} items={[]} loading={false}                />
              ))}
            </div>

            {/* Botão próximo */}
            <button
              onClick={nextSlideRomance}
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
    </div>
    
  );
};
