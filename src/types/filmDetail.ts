interface Genre {
  id: number;
  name: string;
}
interface FilmDetail {
  id?: string;
  poster_path?: string;
  genres?: Genre[];
  overview?: string;
  title?: string;
  backdrop_path: string;
}
interface Video {
  id: string;
  name: string;
  key: string;
}
interface Videos {
  id: string;
  results: Video[];
}
interface Casts {
  id: string;
  cast: Cast[];
}
interface Cast {
  id: string;
  name: string;
  profile_path: string;
  order: number;
}

export type { FilmDetail, Video, Cast, Genre, Casts, Videos };
