import React from "react";
import Card from "../components/Card";

export default function MovieDetails() {
  return (
    <div className="w-[270px] p-8">
      <div className="flex items-center justify-start flex-wrap gap-10 max-w-[1300px]">
        <Card />
      </div>
      <div>
        <h1 className="font-poppins text-[24px] font-bold leading-48 tracking-wider text-left">
          Mortal Kombat
        </h1>
        <p className="text-[22px] w-[311px]">
          MMA fighter Cole Young seeks out Earth's greatest champions in order
          to stand against the enemies of Outworld in a high stakes battle for
          the universe.
        </p>
      </div>
    </div>
  );
}
