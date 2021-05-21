import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getMoviesHandler = useCallback(async () => {
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
  }, []);

  function addMovieHandler(movie) {
    console.log(movie);
  }

  useEffect(() => {
    getMoviesHandler();
  }, [getMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
