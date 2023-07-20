import React from "react";
import Card from "../components/Card";
import {
  ClockIcon,
  HeartIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function MoviePage() {
  return (
    <section className="flex w-full min-h-screen">
      <div className="w-[20%] pl-8 border-r h-full bg-slate-100 min-h-screen">
        <h1 className="text-[32px] mb-8 mt-4">
          Dev<span className="text-[#5F2EEA]">Hire</span>{" "}
        </h1>
        <h2 className="mb-4">Search</h2>
        <h2>Watchlist</h2>
      </div>
      <div className="flex-col">
        <div className="flex-1 pl-16 pt-16 flex items-start justify-start gap-5">
          <div className="flex items-top justify-start flex-wrap gap-10 max-w-[1300px]">
            <Card />
          </div>
          <div className="flex-col">
            <h1 className="text-[32px] mb-8">Mortal Kombat</h1>
            <h1 className="text-[22px] w-[601px]">
              MMA fighter Cole Young seeks out Earth's greatest champions in
              order to stand against the enemies of Outworld in a high stakes
              battle for the universe.
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

        <div className="pl-16 pt-20">
          <h1 className="text-[32px] w-256 h-43 pb-6">Similar Movies</h1>

          <div className="flex items-center justify-start flex-wrap gap-10 max-w-[1300px]">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
