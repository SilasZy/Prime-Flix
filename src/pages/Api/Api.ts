import axios from 'axios';

const API_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTQ4OTRjZmRmZjgxNTBjNzU1MDBlY2JkMWE1OTU2YyIsIm5iZiI6MTc1MDQyOTY4Ny45NjcsInN1YiI6IjY4NTU2ZmY3OTBkN2Q5NjQ5MjBjZjdkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FqalgEzxsOIDhQ52wJxtQ-QgiPfB8ndPj6ME0V7gwIo'; // Seu token v4

export const getMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/4/movie/popular', // Note "/4/" em vez de "/3/"
      {
        headers: {
          'Authorization': `Bearer ${API_ACCESS_TOKEN}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        params: {
          language: 'pt-BR',
          page: 1
        }
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Erro na API v4:', error || 'Erro desconhecido');
    throw error;
  }
};