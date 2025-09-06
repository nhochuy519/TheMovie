"use client";

import Image from "next/image";
import Button from "@/components/button";
import SliderCard from "@/components/SliderCard";
import { Slider } from "@mui/material";
import SliderPoster from "@/components/SliderPoster";
import { useQuery } from "@tanstack/react-query";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getTrendingTV,
  getTopRatedTV,
} from "@/services/movieService";
export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["mediaData"],
    queryFn: async () => {
      const [trendingMovies, topRatedMovies, trendingTV, topRatedTV] =
        await Promise.all([
          getTrendingMovies(),
          getTopRatedMovies(),
          getTrendingTV(),
          getTopRatedTV(),
        ]);

      return { trendingMovies, topRatedMovies, trendingTV, topRatedTV };
    },
  });

  return (
    <div>
      <SliderPoster />
      <div className="py-[4rem] px-[2rem] ">
        <div className="max-w-screen-2xl mx-auto  ">
          <SliderCard
            data={data?.trendingMovies}
            title="Trending Movie"
            type="movie"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto mt-[4rem] ">
          <SliderCard
            data={data?.topRatedMovies}
            title="Top Rated Movies"
            type="movie"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto mt-[4rem] ">
          <SliderCard data={data?.trendingTV} title="Trending TV" type="tv" />
        </div>
        <div className="max-w-screen-2xl mx-auto mt-[4rem] ">
          <SliderCard data={data?.topRatedTV} title="Top Rated TV" type="tv" />
        </div>
      </div>
    </div>
  );
}
