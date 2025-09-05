"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { getTrendingPopularity } from "@/services/movieService";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Poster from "../Poster";
import { useQuery } from "@tanstack/react-query";
import { TMDBItem } from "@/types/trending";
import { title } from "process";

const SliderPoster = () => {
  const { data } = useQuery({
    queryFn: () => getTrendingPopularity(),
    queryKey: ["trendingTop5"],
  });

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((item: TMDBItem, index: number) => {
          return (
            <SwiperSlide key={item.id}>
              <Poster
                title={item.title || item.name}
                backdrop_path={item.backdrop_path}
                overview={item.overview}
                poster_path={item.poster_path}
              />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide>
        <SwiperSlide>
          <Poster />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
export default SliderPoster;
