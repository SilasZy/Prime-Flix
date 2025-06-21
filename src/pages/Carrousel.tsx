

import React, { use, useEffect, useState } from 'react';
import imagem from "../assets/Hanib.jpg";
// import axios from 'axios';
// import { getMovies } from './Api/Api';
// const [MoviesApi, setMoviesApi] = useState<any[]>([]);

// Removed invalid useState declaration that caused conflict


const images = [
  {
    src: {imagem},
    title: "Aventuras Incríveis",
    description: "Uma jornada épica através de paisagens desconhecidas"
  },
  {
    url: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    title: "Noite Estrelada",
    description: "Descubra os mistérios do universo noturno"
  },
  {
    url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    title: "Cidade Moderna",
    description: "A vida pulsante em uma metrópole contemporânea"
  },
];






export const Carrousel: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };





  return (


    <div className="relative w-screen h-screen overflow-hidden ">
      {/* Slides */}
      {images.map((list, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={list.src?.imagem|| list.url}
            alt={`Slide ${index + 1}`}
            className="object-cover h-full float-right w-full"
          />
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Container de texto estilo Prime Video */}
          <div className="absolute bottom-1/4 left-16 z-20 text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{list.title}</h1>
            <p className="text-xl mb-6 drop-shadow-md">{list.description}</p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-8 py-2 rounded-md font-semibold hover:bg-opacity-90 transition">
                Assistir agora
              </button>
              <button className="bg-gray-600 bg-opacity-70 text-white px-8 py-2 rounded-md font-semibold hover:bg-opacity-50 transition">
                Mais informações
              </button>
            </div>
          </div>
        </div>
      ))}
   

      {/* Botão anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/60 hover:cursor-pointer text-white p-3 rounded-full"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botão próximo */}
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
