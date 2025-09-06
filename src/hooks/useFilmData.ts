import { useQueries, UseQueryResult } from "@tanstack/react-query";

import { getDetailFilm, getVideos } from "@/services/movieService";
import { FilmDetail, Video, Casts, Cast, Videos } from "@/types/filmDetail";
const useFilmData = (id: number, type: "movie" | "tv") => {
  const result = useQueries({
    queries: [
      {
        queryKey: ["detailFilm", id],
        queryFn: () => getDetailFilm(id, type),
        enabled: !!id,
        select: (data: FilmDetail) => ({
          id: data.id,
          poster_path: data.poster_path,
          genres: data.genres,
          overview: data.overview,
          title: data.title || data.name,
          backdrop_path: data.backdrop_path,
        }),
      },
      {
        queryKey: ["casts", id],
        queryFn: () => getDetailFilm(id, type, true),
        enabled: !!id,
        select: (data: Casts) => ({
          id: data.id,
          cast: data.cast.filter((item: Cast) => item.order <= 10),
        }),
      },
      {
        queryKey: ["movieVideos", id],
        queryFn: () => getVideos(id, type),
        enabled: !!id,
        select: (data: Videos) => ({
          id: data.id,
          results: data.results.slice(0, 3).map((item, index) => {
            return {
              id: item.id,
              name: item.name,
              key: item.key,
            };
          }),
        }),
      },
    ],
  });
  const [detailFilm, casts, video] = result;
  return {
    detailFilm,
    casts,
    video,
  };
};
export { useFilmData };
