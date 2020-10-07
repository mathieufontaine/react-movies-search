import React from "react";

export default function Movie({ movie }) {
  return (
    <div className="card">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="content">
        <h3 className="title">{movie.title}</h3>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average} / 10
        </p>
        <p className="desc">
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
