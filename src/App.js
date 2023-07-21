import React from "react";
import HomePage from "./page/HomePage";
import MoviePage from "./page/MoviePage";
import { Route, Routes } from "react-router-dom";
import About from "./page/About";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const movieSlice = useSelector((state) => state.movie);
  console.log(movieSlice);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/about"
        element={movieSlice.title ? <About /> : <HomePage />}
      />
      <Route
        path="/movie"
        element={movieSlice.title ? <MoviePage /> : <HomePage />}
      />
    </Routes>
  );
}
