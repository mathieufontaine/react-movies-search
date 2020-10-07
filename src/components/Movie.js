import React from "react";

export default function Movie({ movie }) {
  return (
    <div className="card">
      <img
        className="card--img"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p className="card--desc">
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
