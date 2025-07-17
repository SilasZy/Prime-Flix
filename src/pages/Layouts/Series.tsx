
   import React, { useEffect, useState } from 'react';
   import type { SeriesPopular } from "../Interfaces/Interface";
import { getSeries } from '../Api/Api';
  
export const SeriesCarrousel: React.FC = () => {

   // parte do carrousel
     const [currentIndex, setCurrentIndex] = useState(0);
      const [series, setSeries] = useState<SeriesPopular[]>([]);
       const [loading, setLoading] = useState(true);
     

   
   
       useEffect(() => {
           const fetchSeries = async () => {
               const data = await getSeries();
               setSeries(data);
               setLoading(false);
           };
      


       fetchSeries();
   }, []);
   
       if (loading) {
           return (
               <div className="flex items-center justify-center h-screen">
                   <p className="text-white">Carregando filmes...</p>
               </div>
           );
       }
      
   
   const prevSlide = () => {
     setCurrentIndex((prev) =>
       prev === 0 ? series.length - 1 : prev - 1
     );
   };
   
   const nextSlide = () => {
     setCurrentIndex((prev) =>
       prev === series.length - 1 ? 0 : prev + 1
     );
   };
   
   
   
   
     return (
   
   
       <div className="relative w-screen h-screen overflow-hidden ">

         {series.map((serie, index) => (
           <div
             key={index}
             className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
               index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
             }`}
           >
             <img
     src={`https://image.tmdb.org/t/p/original${serie.poster_path || 'nenhum filme encontrado'} `}
               alt={`Slide ${index + 1}`}
               className="object-cover w-full h-full"
             />
          0
             <div className="flex flex-col items-center justify-center absolute inset-0 bg-black/40" />
             
           
             <div className="absolute bottom-1/4 left-30 z-10 text-white max-w-2xl">
               <h2 className="hidden sm:block text-2xl font-bold mb-4 drop-shadow-lg ">{serie.name}</h2>
               <p className=" hidden text-sm font-semibold mb-6 drop-shadow-md  ">{serie.overview}</p>
               <div className="flex space-x-4">
                 <button className="bg-white text-black px-8 py-2 rounded-md font-semibold hover:bg-opacity-90 transition">
                   Assistir agora
                 </button>
                 <button className="bg-gray-600 bg-opacity-70 text-white px-8 py-2 rounded-md font-semibold hover:bg-opacity-50 transition md:rounded-2xl">
                   Mais informações
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
   
