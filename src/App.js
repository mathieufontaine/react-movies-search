import React from "react";
import SearchMovies from "./components/SearchMovies";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="overlay"></div>
      <Header />
      <div className="container">
        <SearchMovies />
      </div>
      <Footer />
    </>
  );
}

export default App;
