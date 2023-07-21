import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import {
  ChatBubbleLeftRightIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import MovieDetails from "./MovieDetails";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateMovie } from "../redux/store/movie.slice";
// import { Link } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          "https://www.omdbapi.com/?i=tt3896198&apikey=d7e4ef4a&s=title&t=title"
        );
        setMovies(res.data.Search);
        console.log(res.data.Search);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="relative overflow-x-hidden">
      <section className="flex w-full">
        <div className="hidden md:block w-[20%] pl-8 border-r h-full bg-slate-100 min-h-screen">
          <h1 className="text-[32px] mb-8 mt-4">
            Dev<span className="text-[#5F2EEA]">Hire</span>{" "}
          </h1>
          <div className="flex">
            <span className="mr-2 w-[30px] h-[30px] bg-[#5F2EEA] text-[#F2F2F2] flex justify-center items-center rounded-[8px]">
              <MagnifyingGlassIcon className="h-4" />
            </span>
            <h2 className="mb-4">Search</h2>
          </div>
          <div className="flex space-x-4 mr-2 text-[#BCA4FF]">
            <HeartIcon className="h-6" />
            <h2>Watchlist</h2>
          </div>
        </div>
        <div className="md:flex-1 m-4 md:pl-16 pt-16 flex-col flex items-center justify-center md:items-start md:justify-start gap-5">
          <h1 className="text-[32px] text-center w-full font-bold md:hidden">
            Show<span className="text-[#5F2EEA]">Flix</span>{" "}
          </h1>
          <h1 className="text-[32px] font-bold text-left w-full">Explore</h1>
          <div className="flex items-center justify-between w-full max-w-[1200px]">
            <div className="bg-[#EFF0F6] rounded-xl p-5 flex items-center justify-start h-[64px] flex-1 max-w-[950px]">
              <MagnifyingGlassIcon className="h-7 hidden md:block" />
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg bg-transparent outline-none border-none"
              />
            </div>
            <button className="px-2 py-3 md:px-4 md:py-2 ml-2 bg-[#5F2EEA] md:bg-blue-500 text-white rounded-lg md:rounded-r-full md:rounded-l-full md:w-[200px] md:h-[64px]">
              <MagnifyingGlassIcon className="h-7 md:hidden" />
              <span className="hidden md:block">Search</span>
            </button>
          </div>
          <h1 className="mt-12 text-left w-full">Results For: Mortal Kombat</h1>
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-10 max-w-[1300px]">
            {movies?.map((data) => (
              <Card
                key={data?.imdbID}
                id={data?.imdbID}
                title={data?.Title}
                imgUrl={data?.Poster}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
