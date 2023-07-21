import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import {
  ClockIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MoviePage() {
  const movieSlice = useSelector((state) => state.movie);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          "https://www.omdbapi.com/?i=tt3896198&apikey=d7e4ef4a&s=title"
        );
        setMovies(
          res.data.Search.filter((data) => data.imdbID != movieSlice.id).slice(
            0,
            3
          )
        );
        console.log(
          res.data.Search.filter((data) => data.imdbID != movieSlice.id).slice(
            0,
            3
          ),
          movieSlice.id
        );
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [movieSlice.id]);
  return (
    <section className="flex flex-col xl:flex-row w-full min-h-screen overflow-hidden">
      <div className="hidden xl:block w-[20%] pl-8 border-r h-full bg-slate-100 min-h-screen">
        <Link to="/">
          <h1 className="text-[32px] mb-8 mt-4">
            Show<span className="text-[#5F2EEA]">Flix</span>{" "}
          </h1>
        </Link>
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
      <h1 className="text-[32px] text-center w-full font-bold md:hidden mt-10">
        <Link to="/">
          <span>
            Show<span className="text-[#5F2EEA]">Flix</span>{" "}
          </span>
        </Link>
      </h1>
      <div className="flex-col">
        <div className="xl:flex-1 flex-col xl:flex-row pl-4 xl:pl-16 pt-16 flex items-start justify-start gap-5">
          <div className="flex items-top justify-start flex-wrap gap-10 max-w-[1300px]">
            <div className="relative h-[300px] w-[310px] overflow-hidden rounded-2xl">
              <img
                src={movieSlice?.imgUrl}
                alt="card"
                className="absolute h-full w-full top-0 right-0 -z-10 object-cover"
              />
            </div>
          </div>
          <div className="flex-col w-full mr-5">
            <h1 className="text-[25px] xl:text-[32px] mb-8 whitespace-normal">
              {movieSlice?.title}
            </h1>
            <h1 className="text-[22px] xl:w-[601px] whitespace-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              delectus at quasi tenetur laborum consequatur vitae, quaerat,
              molestias ipsam optio fugit libero quia aliquid.
            </h1>
            <div className="flex space-x-40">
              <ClockIcon className="h-6" />
              <StarIcon className="h-6" />
              <PlayIcon className="h-6" />
            </div>
            <div className="mt-[50px] flex">
              <button className="px-4 py-2 ml-2 bg-[#5F2EEA] text-white rounded-r-full rounded-l-full w-[200px] h-[64px]">
                Watch Now
              </button>
              <div className="bg-[#D9DBE9] w-[70px] h-[64px] p-6 ml-4 rounded-[26px] border-[#5F2EEA]">
                <HeartIcon className="h-6 text-[#5F2EEA]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-2 xl:pl-16 pt-20">
          <h1 className="text-[32px] w-256 h-43 pb-6">Similar Movies</h1>

          <div className="flex items-center justify-center md:justify-start flex-wrap gap-10 max-w-[1300px]">
            {movies?.map((data) => (
              <Card
                key={data?.imdbID}
                id={data?.imdbID}
                title={data?.Title}
                imgUrl={data?.Poster}
                isMoviePage={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
