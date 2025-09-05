import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getFilms } from "@/services/movieService";
import { TMDBResponse } from "@/types/trending";
// Add this import if FilmPage is defined there
// const useFilmList = (
//   page: number = 1,
//   type: "movie" | "tv",
//   query: string = ""
// ) => {
//   const { data } = useQuery({
//     queryKey: ["searchQuery", page, type, query],
//     queryFn: () => getFilms(page, type, query),
//   });
//   return data;
// };

const useFilmList = (type: "movie" | "tv", query: string = "") => {
  return useInfiniteQuery({
    queryKey: ["films", type, query],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getFilms(pageParam, type, query),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1; // trang tiếp theo
      }
      return false;
    },
  });
};
export { useFilmList };
