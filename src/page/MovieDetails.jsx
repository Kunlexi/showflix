import React from "react";
import Card from "../components/Card";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function MovieDetails({ title, imgUrl }) {
  return (
    <div className="w-full p-8 relative h-full">
      <Link to="/">
        <ArrowLeftIcon className="cursor-pointer h-7 mt-5 mb-10" />
      </Link>
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex items-center justify-start flex-wrap gap-10 max-w-[1300px]">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl">
            <img
              src={imgUrl}
              alt="card"
              className="absolute h-full w-full top-0 right-0 -z-10 object-cover"
            />
          </div>
        </div>
        <div className="mt-20 space-y-5">
          <h1 className="font-poppins text-[24px] font-bold leading-48 tracking-wider text-left">
            {title}
          </h1>
          <p className="text-[22px] w-[311px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum
            temporibus rem repudiandae ducimus adipisci facilis non quia.
            Delectus, nemo!
          </p>
        </div>
      </div>
      <Link to="/movie">
        <div className="flex items-center justify-center 2xl:justify-start mt-4">
          <button className="px-4 py-2 ml-2 bg-[#5F2EEA] text-white rounded-r-full rounded-l-full w-[250px] h-[64px] xl:absolute bottom-10">
            Watch
          </button>
        </div>
      </Link>
    </div>
  );
}
