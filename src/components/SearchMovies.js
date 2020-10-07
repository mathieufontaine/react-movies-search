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
        {/* <h2>Search for any Movie:</h2> */}
        <form className="form">
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
          <>
            <div className="message">
              <h2>
                <span>{movies.length}</span> movies found for{" "}
                <span>'{query}'</span>
              </h2>
            </div>
            <MoviesList movies={movies} />
          </>
        ) : (
          <div className="message error">
            <h2>
              No Movies found for <span>'{query}' 😢</span>
            </h2>
          </div>
        )
      ) : (
        <div className="message error">
          <h2>Search for any Movie in the form above 🔎</h2>
        </div>
      )}
    </div>
  );
}
