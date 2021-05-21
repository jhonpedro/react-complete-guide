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
      const response = await fetch(
        'https://test-f860d-default-rtdb.firebaseio.com/movies.json'
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      console.log(data);

      const loadedMovies = [];

      for (const index in data) {
        loadedMovies.push({
          id: index,
          title: data[index].title,
          openingText: data[index].openingText,
          releaseDate: data[index].releaseDate,
        });
      }

      setMovies(loadedMovies);
      setError('');
    } catch (error) {
      setError('');
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function addMovieHandler(movie) {
    await fetch('https://test-f860d-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' },
    });
    getMoviesHandler();
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
