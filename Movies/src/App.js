import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getMoviesHandler = async () => {
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
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
