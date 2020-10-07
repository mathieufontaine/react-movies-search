import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  useEffect(() => {
    searchMovies(query);
  }, [query]);

  const searchMovies = async e => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const clearQuery = e => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <div>
      <div className="search">
        <h2>Search for any Movie: </h2>
        <form className="form">
          <label htmlFor="query" className="label">
            Movie Name
          </label>
          <input
            type="text"
            className="input"
            name="query"
            placeholder="i.e. Star Wars"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="button" onClick={clearQuery}>
            Clear
          </button>
        </form>
      </div>
      {query ? (
        movies && movies.length !== 0 ? (
          <MoviesList movies={movies} />
        ) : (
          <div className="error-message">
            <h2>No Movies found 😢</h2>
          </div>
        )
      ) : (
        <div className="error-message">
          <h2>Type something above to search for movies 🔎</h2>
        </div>
      )}
    </div>
  );
}
