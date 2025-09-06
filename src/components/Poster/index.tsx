"use client";

import Image from "next/image";
import Button from "../button";
import { useState, useEffect, use } from "react";
import { TMDBItem } from "@/types/trending";
import Link from "next/link";
import { createPortal } from "react-dom";
import YouTubeEmbed from "../YouTubeEmbed";
import { IoClose } from "react-icons/io5";
import { useFilmData } from "@/hooks/useFilmData";

const Poster = ({
  title,
  overview,
  backdrop_path,
  poster_path,
  id,
}: TMDBItem) => {
  const [open, setOpen] = useState<boolean>(false);
  const { video } = useFilmData(id ? +id : 0, "movie");
  console.log("video la", video.data);
  return (
    <div
      className={` cursor-pointer relative flex items-center justify-center   w-full bg-cover bg-center relative md:py-32 md:px-12 flex items-center px-4 py-16   bg-gradient-to-t from-white to-black/90 
        after:content-[''] after:absolute after:w-full after:h-full after:inset-0 after:bg-gradient-to-t after:from-[var(--background)] after:to-black/0 after:z-0
    
      `}
      style={{
        backgroundImage: backdrop_path
          ? `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
          : undefined,
      }}
    >
      <div className="max-w-screen-2xl z-10 h-fit flex items-center justify-between">
        <div className="md:py-2  px-[1rem] lg:w-2/3">
          <h2
            className={`text-4xl font-bold transition-all duration-500 ease-out md:text-6xl lg:text-8xl opacity-0 nameMovie-animation`}
          >
            {title}
          </h2>
          <p
            className={`md:text-xl md:my-8 my-12 transition-all duration-500 ease-out w-full font-medium opacity-0 desMovie-animation`}
          >
            {overview}
          </p>
          <div
            className={`flex gap-4 transition-all duration-500 ease-out md:text-xl opacity-0 bttsMovie-animation `}
          >
            <Link href={`/movie/${id}`}>
              {" "}
              <Button
                text="Watch Now"
                className="bg-[var(--bg-red)] shadow-[1px_1px_13px_4px_rgba(255,0,0,1)] outline-none hover:shadow-[1px_1px_13px_6px_rgba(255,0,0,1)] text-2xl py-2 px-8"
              />
            </Link>

            <Button
              onClick={() => setOpen(true)}
              text="Watch trailer"
              className="hover:bg-white hover:text-[var(--bg-red)] hover:outline-none duration-300 hover:ease-in-out text-2xl py-2 px-8"
            />
          </div>
        </div>
        <div className="relative lg:w-1/3  hidden lg:block md:duration-500 duration-0    ">
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : "/card.jpg"
            }
            width={384}
            height={576}
            alt="Main Image"
            className="rounded-4xl object-cover pop-animation w-96 "
            priority
          />
        </div>
      </div>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100000] flex items-center justify-center py-20 bg-black/50">
            <div className="relative w-full max-w-screen-md p-8 bg-black h-full  ">
              <div className="absolute right-2 top-2 text-white z-20">
                <IoClose
                  className="text-2xl cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              {video && (
                <YouTubeEmbed
                  keyVideo={video.data?.results?.[0]?.key ?? "LXb3EKWsInQ"}
                  name="Demo Video"
                />
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Poster;
