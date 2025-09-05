import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    session_id: process.env.NEXT_PUBLIC_TMDB_SESSION_ID_KEY,
    language: "en-US",
  },
});

export default instance;
