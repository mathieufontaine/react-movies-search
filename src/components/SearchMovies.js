import React, { useState, useEffect } from "react";
import Movie from "./Movie";

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

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <div>
      <h1>Search for any Movie: </h1>
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
      {query ? (
        movies && movies.length !== 0 ? (
          <div className="card-list">
            {movies
              .filter(movie => movie.poster_path)
              .map(movie => (
                <Movie movie={movie} key={movie.id} />
              ))}
          </div>
        ) : (
          <h2>No Movie found 😢</h2>
        )
      ) : (
        <h2>Type something in the searchbar to look for movies 🎬</h2>
      )}
    </div>
  );
}
