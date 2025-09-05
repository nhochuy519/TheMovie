import instance from "@/lib/axios";
import { TMDBItem } from "@/types/trending";
import { Cast } from "@/types/filmDetail";
const movieService = {
  getTrendingPopularity: async () => {
    const res = await instance.get("/trending/all/day");
    const movies = res.data.results
      .sort((a: TMDBItem, b: TMDBItem) => b.popularity - a.popularity)
      .slice(0, 5);
    return movies;
  },
  getTrendingMovies: async () => {
    const res = await instance.get("/trending/movie/day");
    const movies = res.data.results;

    return movies;
  },
  getTopRatedMovies: async () => {
    const res = await instance.get("/movie/top_rated", {
      params: {
        page: 1, // số trang
      },
    });
    const movies = res.data.results.map((item: TMDBItem) => {
      return {
        ...item,
        media_type: "movie",
      };
    });

    return movies;
  },
  getTrendingTV: async () => {
    const res = await instance.get("/trending/tv/day");
    const TV = res.data.results;

    return TV;
  },
  getTopRatedTV: async () => {
    const res = await instance.get("/tv/top_rated", {
      params: {
        page: 1, // số trang
      },
    });
    const TV = res.data.results.map((item: TMDBItem) => {
      return {
        ...item,
        media_type: "tv",
      };
    });

    return TV;
  },

  getDetailFilm: async (
    id: number,
    mediaType: "movie" | "tv",
    casts = false
  ) => {
    let url = `/${mediaType}/${id}`;
    if (casts) {
      url = `/${mediaType}/${id}/credits`;
    }

    const res = await instance.get(url);

    let detailsFilm = res.data;

    return detailsFilm;
  },
  getVideos: async (id: number, mediaType: "movie" | "tv") => {
    const res = await instance.get(`/${mediaType}/${id}/videos`);

    const videos = res.data;

    return videos;
  },

  getFilms: async (
    page: number,
    type: "movie" | "tv" = "movie",
    query: string = ""
  ) => {
    let url = `/discover/${type}`;
    console.log("url ben get film", url);
    let params: {
      include_adult?: boolean;
      include_video?: boolean;
      page?: number;
      sort_by?: string;
      query?: string;
      language?: string;
    } = {
      page,
      include_adult: false, // tránh phim 18+
      include_video: false,
      language: "en-US",
    };

    if (query.trim()) {
      url = `/search/${type}`;
      params.query = query;
    } else {
      params.sort_by = "popularity.desc";
    }

    const res = await instance.get(url, { params });
    const data = res.data;

    const results = data.results.map((item: TMDBItem) => {
      return {
        ...item,
        media_type: type,
      };
    });
    data.results = results;

    return data;
  },
};
export const {
  getTrendingPopularity,
  getTrendingMovies,
  getTopRatedMovies,
  getTrendingTV,
  getTopRatedTV,
  getDetailFilm,
  getVideos,
  getFilms,
} = movieService;
