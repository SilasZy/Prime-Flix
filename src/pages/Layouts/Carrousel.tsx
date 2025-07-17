

import React, { useEffect, useState } from 'react';
import type { MoviePopular } from '../Interfaces/Interface';
import { getMovies } from '../Api/Api';
import { Loading } from './components/Loading';






export const Carrousel: React.FC = () => {
// parte do carrousel
  const [currentIndex, setCurrentIndex] = useState(0);
   const [movies, setMovies] = useState<MoviePopular[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
            setLoading(false);
        };
     
    fetchMovies();
}, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
            
                <Loading />
      
            </div>
        );
    }
 

const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? movies.length - 1 : prev - 1
  );
};

const nextSlide = () => {
  setCurrentIndex((prev) =>
    prev === movies.length - 1 ? 0 : prev + 1
  );
};




  return (


    <div className="relative w-screen h-screen overflow-hidden ">
   
      {movies.map((movie, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
  src={`https://image.tmdb.org/t/p/original${movie.poster_path || 'nenhum filme encontrado'} `}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
       0
          <div className="flex flex-col items-center justify-center absolute inset-0 bg-black/40" />
          
    <div className="absolute inset-0 bg-black/40 z-0" />

<div className="absolute bottom-1/4 left-5 z-10 text-white max-w-2xl">
  <h2 className="hidden sm:block text-2xl font-bold mb-4 drop-shadow-lg ">{movie.title}</h2>
 

  <div className="flex justify-start items-center gap-3 mt-4">
   
    <button className="flex items-center gap-2 bg-[#41474f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#444]/90 transition shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 4l10 6-10 6V4z" />
      </svg>
      <span className="text-sm md:text-base">Assista agora</span>
    </button>

   
    <button className="w-10 h-10 flex items-center justify-center bg-[#41474f]/80 text-white rounded-full hover:bg-[#444]/90 transition shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </button>

 

    <button  className="w-10 h-10 flex items-center justify-center bg-[#41474f] text-white rounded-full hover:bg-[#444]/90 transition shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    </button>
  </div>
</div>

          
        </div>
      ))}
   

     
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/60 hover:cursor-pointer text-white p-3 rounded-full"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

    
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 z-20 -translate-y-1/2 bg-black/40  hover:bg-black/60 hover:cursor-pointer text-white p-3 rounded-full"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
