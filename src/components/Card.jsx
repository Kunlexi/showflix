import React from "react";

export default function Card({ picture, name }) {
  return (
    <div className="relative h-[300px] w-[210px] overflow-hidden rounded-2xl">
      <img
        src={require("../assets/mt1.jpeg")}
        alt="card"
        className="absolute h-full w-full top-0 right-0 -z-10"
      />
      <button className="bg-[#D9DBE9] rounded-full px-10 py-2 absolute bottom-5 left-[50%] -translate-x-[50%]">
        View
      </button>
    </div>
  );
}