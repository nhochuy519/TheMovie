"use client";
import Button from "@/components/button";
import Card from "@/components/Card";

import React, { useState } from "react";
import { useFilmList } from "@/hooks/useFilmList";
import { TMDBItem } from "@/types/trending";

const ListFilm = ({ type }: { type: "movie" | "tv" }) => {
  const [search, setSearch] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const { data, fetchNextPage } = useFilmList(type, search);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const films =
    data?.pages.reduce((acc, page) => acc.concat(page.results ?? []), []) ?? [];

  return (
    <div>
      <div
        className=" relative bg-center bg-cover bg-no-repeat w-full   lg:px-16 md:py-32 py-12 px-4   h-48
    
    after:content-[''] after:absolute after:inset-0 after:w-full  after:bg-gradient-to-t after:from-[var( --background)] after:to-white
    "
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-4 z-50 text-4xl font-bold">
          Movies
        </span>
      </div>
      <div className="   px-4 md:px-8 py-8 xl:p-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center md:w-fit w-full h-fit relative  bg-[var(--inputBg)]">
            <input
              type="text"
              className="outline-none   border-none rounded-full px-6 py-2 placeholder-gray-500 text-white flex-1  md:w-96 "
              placeholder="Enter keyword "
              onChange={(e) => {
                handleInput(e);
              }}
            />
            <Button
              onClick={() => {
                setSearch(value);
              }}
              text="Search"
              className=" bg-[var(--bg-red)] shadow-[1px_1px_13px_4px_rgba(255,0,0,1)] outline-none hover:shadow-[1px_1px_13px_6px_rgba(255,0,0,1)] text-2xs py-1  px-6"
            />
          </div>
          <div className="flex flex-wrap -mx-2 mt-16 ">
            {films?.map((item: TMDBItem, index: number) => {
              return (
                <div className="px-2 w-1/2 md:w-1/4 lg:w-1/6 mb-8" key={index}>
                  <Card data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex justify-center  ">
            <Button
              onClick={() => {
                console.log("fetch dữ  liệu");
                fetchNextPage();
              }}
              text="Watch more"
              className="hover:bg-white hover:text-[var(--bg-red)] hover:outline-none duration-300 hover:ease-in-out md:text-2xl text-xs md:px-8 px-4 text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFilm;
