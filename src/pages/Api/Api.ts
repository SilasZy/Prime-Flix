  const API_KEY = 'd6cd063195f11b2ccd29dd8d8929b3f4';
  export const getMovies = async () => {
    try {
      // pra series coloco tv
      // pra filmes coloco movie
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
            if (!response.ok) {
                throw new Error('Erro ao buscar filmes');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Erro na API:', error);
            return [];
        }
    };

    
  export const getSeries = async () => {

        try {
          
            // pra series coloco tv
            // pra filmes coloco movie
            // const movieId = (Id: number) => movieId;
 // Defina a página atual

     const aleatoryPage = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório entre 1 e 10

     //funcao pra serie mais votada
   
            const API_KEY = 'd6cd063195f11b2ccd29dd8d8929b3f4';
            const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR&page=${aleatoryPage}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar séries');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Erro na API:', error);
            return [];
        }
    };
           
  export const getCast = async (movieId: number) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`);
            if (!response.ok) {
                throw new Error('Erro ao buscar filmes');
            }
            const data = await response.json();
            return data.cast;
        } catch (error) {
            console.error('Erro na API:', error);
            return [];
        }
}



    export const getTrailerMovie = async (movieId: number) => {
        try {
          
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`);
            if (!response.ok) {
                throw new Error('Erro ao buscar trailers');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Erro na API:', error);
            return [];
        }
    };
    export const getMoviesGenero = async ( getMoviesGenero: number) => {
const aleatoryPage = Math.floor(Math.random() * 10) + 1; 
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${getMoviesGenero}&page=${aleatoryPage}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar filmes de terror');
            }
            const data = await response.json(); 
            return data.results;
        } catch (error) {
            console.error('Erro na API:', error);
            return [];
        }
    };
export const getSeriesGenero = async (getSeriesGenero: number) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=${getSeriesGenero}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar séries');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Erro na API:', error);
            return [];
        }
    };
    
    export const getElenco = async (movieId: number) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`);
            if (!response.ok) {
                throw new Error('Erro ao buscar filmes');
            }
            const data = await response.json();
            return data.cast;
        } catch (error) {
            console.error('Erro na API:', error);
            return [];
        }
    };


    export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
    );
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do filme');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};


 