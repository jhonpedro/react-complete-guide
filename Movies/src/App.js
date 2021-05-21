import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getMoviesHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/films');

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setMovies(
        data.results.map((movieItem) => {
          return {
            id: movieItem.episode_id,
            title: movieItem.title,
            openingText: movieItem.opening_crawl,
            releaseDate: movieItem.release_date,
          };
        })
      );
      setError('');
    } catch (error) {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {error && <p>{error}</p>}
        {isLoading && <p>Is loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
