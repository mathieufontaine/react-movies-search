import React from "react";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <div className="card-list">
      {movies
        .filter(movie => movie.poster_path)
        .map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MoviesList;
