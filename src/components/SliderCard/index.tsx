"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Button from "@/components/button";
import Card from "../Card";

import { TMDBItem } from "@/types/trending";

const SliderCard = ({ title, data }: { title: string; data: TMDBItem[] }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <div className="md:text-[1.5rem] text-base">{title}</div>
        <Button
          text="View more"
          className="md:text-[1.125rem] text-sm px-4 md:px-6"
        />
      </div>

      <div className="mt-8 cursor-pointer">
        <Swiper
          spaceBetween={10}
          observer={true}
          observeParents={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2000, // 0.5s đổi slide
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            780: {
              slidesPerView: 4,
            },
            1015: {
              slidesPerView: 6,
            },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="">
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderCard;
