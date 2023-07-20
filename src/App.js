import React from "react";
import HomePage from "./page/HomePage";
import MovieDetails from "./page/MovieDetails";
import MoviePage from "./page/MoviePage";

export default function App() {
  return (
    <div>
      <HomePage />;
      <MovieDetails />;
      <MoviePage />
    </div>
  );
}
