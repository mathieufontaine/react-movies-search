import React from "react";
import SearchMovies from "./components/SearchMovies";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="overlay"></div>
      <Header />
      <div className="container">
        <SearchMovies />
      </div>
    </>
  );
}

export default App;
