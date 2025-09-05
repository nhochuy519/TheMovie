export interface TMDBResponse {
  page: number;
  results: TMDBItem[];
  total_pages: number;
  total_results: number;
}

export interface TMDBItem {
  id?: number;
  media_type: "movie" | "tv" | "person";
  adult?: boolean;

  // Movie fields
  title?: string;
  release_date?: string;

  // TV fields
  name?: string;
  first_air_date?: string;

  // Common fields
  backdrop_path?: string | null;
  poster_path?: string | null;
  overview?: string;
  original_language?: string;
  genre_ids?: number[];
  vote_average?: number;
  vote_count?: number;
  popularity?: number;
}
