import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
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
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {isLoading && <p>Is loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
