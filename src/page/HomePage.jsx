import React from "react";
import Card from "../components/Card";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <section className="flex w-full min-h-screen">
      <div className="w-[20%] pl-8 border-r h-full bg-slate-100 min-h-screen">
        <h1 className="text-[32px] mb-8 mt-4">
          Dev<span className="text-[#5F2EEA]">Hire</span>{" "}
        </h1>
        <h2 className="mb-4">Search</h2>
        <h2>Watchist</h2>
      </div>
      <div className="flex-1 pl-16 pt-16 flex-col flex items-start justify-start gap-5">
        <h1 className="text-[32px]">Explore</h1>
        <div className="flex items-center justify-between w-full max-w-[1200px]">
          <div className="bg-[#EFF0F6] rounded-xl p-5 flex items-center justify-start h-[64px] flex-1 max-w-[950px]">
            <MagnifyingGlassIcon className="h-7" />
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg bg-transparent outline-none border-none"
            />
          </div>
          <button className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-r-full rounded-l-full w-[200px] h-[64px]">
            Search
          </button>
        </div>
        <h1 className="mt-12">Results For: Mortal Kombat</h1>
        <div className="flex items-center justify-start flex-wrap gap-10 max-w-[1300px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
