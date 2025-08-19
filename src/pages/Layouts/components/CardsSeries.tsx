// components/CarouselCard.tsx
import { useState } from "react";
import { Loading } from "./Loading";
import type { SeriesPopular } from "../../Interfaces/Interface";
import PagepropsSeries from "../../props/PagepropsSeries";

interface Props {
  title: string;
  items: SeriesPopular[];
  loading: boolean;
  itemsPerPage?: number;
}

export const CardsSeries = ({ title, items, loading, itemsPerPage = 9 }: Props) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const nextSlide = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <div className="mt-8 relative">
      <h1 className="text-white font-medium text-2xl pb-5 ms-25">{title}</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-row gap-4 items-center overflow-x-auto scrollbar-hide">
          {/* Botão anterior */}
   

      
          <div className="flex flex-row gap-4 w-full justify-center">
            {paginatedItems.map((item) => (
              <PagepropsSeries
                key={item.id}
                id={item.id}
                name={item.name}

                poster_path={item.poster_path}
                first_air_date={item.first_air_date}
                overview={item.overview}
                vote_average={item.vote_average} title={item.title} items={[]} loading={false} media_type={"item.media_type"}              />
            ))}
          </div>

          {/* Botão próximo */}

{/* Botão PREV (esquerda) */}
<button
  onClick={prevSlide}
  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer"
  aria-label="Anterior"
  type="button"
>
  <svg
    className="w-6 h-6 pointer-events-none"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

{/* Botão NEXT (direita) */}
<button
  onClick={nextSlide}
  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer"
  aria-label="Próximo"
  type="button"
>
  <svg
    className="w-6 h-6 pointer-events-none"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>


        </div>
      )}
    </div>
  );
};


