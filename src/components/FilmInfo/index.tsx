import Image from "next/image";
import { useFilmData } from "@/hooks/useFilmData";
import Button from "../button";
import YouTubeEmbed from "../YouTubeEmbed";
import { Genre } from "@/types/filmDetail";

const FilmInfor = ({ id, type }: { id: number; type: "movie" | "tv" }) => {
  const { detailFilm, casts, video } = useFilmData(+id, type);

  return (
    <div>
      <div
        style={{
          backgroundImage: detailFilm.data
            ? `url(https://image.tmdb.org/t/p/original/${detailFilm.data.backdrop_path})`
            : undefined,
        }}
        className=" relative bg-center bg-cover bg-no-repeat w-full   lg:px-16 md:py-32 py-12 px-4   
    before:content-[''] before:absolute before:w-full before:left-0 before:right-0  before:bottom-0 before:h-1/2 before:bg-[var(--background)] before:bottom-0
    after:content-[''] after:absolute after:inset-0 after:w-full after:h-1/2 after:bg-gradient-to-t after:from-[var(--background)] after:to-transparent
    "
      >
        <div className=" relative  z-50 flex max-h-fit   ">
          <div className="relative  z-50  px-4 mr-4 md:block hidden ">
            <Image
              src={
                detailFilm.data
                  ? `https://image.tmdb.org/t/p/original/${detailFilm.data.poster_path}`
                  : "/gray.jpg"
              }
              alt="card Image"
              width={352}
              height={528}
              className="object-cover rounded-4xl  "
            />
            <div></div>
          </div>
          <div className="md:px-4 w-full -my-2">
            <div className="py-4 w-full">
              <h1 className="text-3xl lg:text-7xl font-bold ">
                {detailFilm.data?.title}
              </h1>
            </div>
            <div className="flex items-center text-xs lg:text-sm gap-2 py-4 flex-wrap">
              {detailFilm.data?.genres?.map((item: Genre, index: number) => {
                return (
                  <Button
                    key={index}
                    text={item.name}
                    className="bg-black px-4 py-1"
                  />
                );
              })}
            </div>
            <div className="lg:py-4 py-2 text-xs md:text-sm lg:text-base">
              {detailFilm.data?.overview}
            </div>
            <div>
              <div>
                <h3>Casts</h3>
              </div>

              <div className="flex  flex-wrap -mx-2 mt-1 ">
                {casts.data?.cast?.map((item, index) => {
                  return (
                    <div className="w-28 px-2  relative px-2  " key={item.id}>
                      <div className="relative w-full   ">
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                          alt="card Image"
                          className="object-cover rounded-2xl"
                          width={96}
                          height={144}
                        />
                      </div>
                      <div className=" text-xs md:text-sm">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full   lg:px-16 md:py-32 py-12 px-4  ">
        {video?.data?.results.map((item, index) => {
          return (
            <div className="w-full mb-16 " key={index}>
              <YouTubeEmbed name={item.name} keyVideo={item.key} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilmInfor;
