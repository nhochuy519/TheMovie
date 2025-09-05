import Link from "next/link";
import Button from "../button";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { TMDBItem } from "@/types/trending";

const Card = ({ data }: { data: TMDBItem }) => {
  return (
    <Link
      href={data ? `/${data.media_type}/${data.id}` : ""}
      className="w-full group"
    >
      {/* Khung ảnh */}
      <div
        className={`relative w-full h-[288px]  md:max-h-[320px] bg-cover bg-center rounded-3xl overflow-hidden `}
        style={{
          backgroundImage: data?.poster_path
            ? `url(https://image.tmdb.org/t/p/original/${data.poster_path})`
            : undefined,
        }}
      >
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <Button
            icon={FaPlay}
            className="bg-[var(--bg-red)] outline-none py-4 px-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:shadow-[1px_1px_13px_6px_rgba(255,0,0,1)] shadow-[1px_1px_13px_4px_rgba(255,0,0,1)] "
          />
        </div>
      </div>

      {/* Title */}
      <div className="mt-4 text-[1.125rem] relative z-10 group-hover:text-[var(--bg-red)] transition-colors duration-300">
        {data.title || data.name}
      </div>
    </Link>
  );
};

export default Card;
