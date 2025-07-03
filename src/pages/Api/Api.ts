
  export const getMovies = async () => {
        try {
            const API_KEY = 'd6cd063195f11b2ccd29dd8d8929b3f4';
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
            const API_KEY = 'd6cd063195f11b2ccd29dd8d8929b3f4';   
            const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
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
           


    export const getTrailerMovie = async (movieId: number) => {
        try {
            const API_KEY = "d6cd063195f11b2ccd29dd8d8929b3f4";
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

    