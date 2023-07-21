import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateMovie } from "../redux/store/movie.slice";

export default function Card({ imgUrl, title, id, isMoviePage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBtn = () => {
    dispatch(updateMovie({ title, imgUrl, id }));
    navigate(isMoviePage ? `/movie?id=${id}` : "/about");
  };
  return (
    <div className="relative h-[300px] w-[95%] mx-auto max-w-[400px] md:w-[210px] overflow-hidden rounded-2xl">
      <img
        src={imgUrl}
        alt="card"
        className="absolute h-full w-full top-0 right-0 -z-10 object-cover"
      />
      <button
        onClick={handleBtn}
        className="bg-[#D9DBE9] rounded-full px-10 py-2 absolute bottom-5 left-[50%] -translate-x-[50%]"
      >
        View
      </button>
    </div>
  );
}
