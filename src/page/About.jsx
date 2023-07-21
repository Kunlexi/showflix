import React, { useState } from "react";
import HomePage from "./HomePage";
import MovieDetails from "./MovieDetails";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function About() {
  const movieSlice = useSelector((state) => state.movie);
  return (
    <div className="relative">
      <Link to="/">
        <div className="bg-black opacity-50 absolute w-screen h-screen z-10" />
      </Link>
      <HomePage />
      <div className="fixed top-0 right-0 w-full md:w-[40%] lg:w-[20%] h-screen bg-white z-20">
        <MovieDetails title={movieSlice?.title} imgUrl={movieSlice?.imgUrl} />
      </div>
    </div>
  );
}
