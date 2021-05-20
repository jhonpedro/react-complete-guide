import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
      });
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
