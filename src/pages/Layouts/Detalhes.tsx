import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast, getTrailerMovie, getMovieDetails } from "../Api/Api";
import { MdStar } from "react-icons/md";

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  
}

interface Trailer {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface MovieDetails {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: { id: number; name: string }[];
  
  
}

export const Detalhes = () => {
  const { id } = useParams<{ id: string }>();
  const [cast, setCast] = useState<Cast[]>([]);

  
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [details, elenco, videos] = await Promise.all([
          getMovieDetails(Number(id)),
          getCast(Number(id)),
          getTrailerMovie(Number(id))
        ]);

        setMovieDetails(details);
        setCast(elenco.slice(0, 10));
        setTrailers(videos.filter((v: Trailer) => v.type === "Trailer"));
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
        setError("Falha ao carregar detalhes do filme. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);



  if (loading) return <p className="text-center mt-10">Carregando...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!movieDetails) return <p className="text-center mt-10">Filme não encontrado.</p>;

  return (
    <div className="p-4 space-y-6">
    
      <div className="flex flex-col md:flex-row gap-6">
        <img
     
          src={
  
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieDetails.backdrop_path}`
              : "https://via.placeholder.com/300x450?text=Sem+Poster"
          }
          alt={movieDetails.title}
         
          className="rounded-lg w-sm md:h-1/3"
        />
        
        <div className="flex-1">
          <h1 className="text-white font-bold text-2xl mb-4">{movieDetails.title}</h1>
         
          <div className="flex items-center gap-4 my-2">
            <span className="text-white">{new Date(movieDetails.release_date).getFullYear()}</span>
            <span className="text-white">•</span>
            <span className="text-white">{movieDetails.runtime} minutos</span>
      <MdStar className="text-yellow-500" height={20} width={20}/>
            <span className="text-white">{movieDetails.vote_average.toFixed(1)}/10</span>
          </div>
          
          <div className="flex flex-wrap gap-2 my-3">
            {movieDetails.genres.map(genre => (
              <span key={genre.id} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold mt-4 text-white">Sinopse</h2>
          <p className="text-white font-bold text-sm mb-4">{movieDetails.overview || "Sinopse não disponível."}</p>
        </div>
      </div>

      {/* Trailers */}
      {trailers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Trailer</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${trailers[0].key}`}
              title={trailers[0].name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}

    
  

  {/* Botão Next */}

  <div className=" flex justify-center">
<h2 className="text-white font-bold text-2xl mb-4 ">Elenco & Equipe</h2>
  </div>
        
      
      <div className="flex flex-wrap  justify-center gap-4">
    
          {cast.map((actor) => (
            <div key={actor.id} className="text-center">
              
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=Sem+Foto"
                }
                alt={actor.name}
                className="rounded-lg mx-auto mb-2 w-full h-auto"
              />
<p className="text-sm text-white break-words max-w-[180px]">{actor.name}</p>
<p className="text-sm text-gray-500 break-words max-w-[180px]">{actor.character}</p>
        
            </div>
          ))}
        </div>
      </div>
 
  );
};