import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/";

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log("error interceptor");
    return Promise.reject(error);
  }
);
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const anonToken = localStorage.getItem("anonToken");

    if (config.headers) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else if (anonToken) {
        config.headers.Authorization = `Bearer ${anonToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const getHeaders = (mediaType?: string) => {
  let headers = { "Content-Type": "application/json" };

  if (mediaType === "multipart") {
    headers = { "Content-Type": "multipart/form-data" };
  } else if (mediaType === "text") {
    headers = { "Content-Type": "text/plain" };
  } else if (mediaType === "xml") {
    headers = { "Content-Type": "application/xml" };
  }

  return headers;
};

export const queries = {
  get: (url: string, mediaType?: string) =>
    axios
      .get(url, { headers: getHeaders(mediaType) })
      .then((response: AxiosResponse) => response.data),
  post: (url: string, body: {}, mediaType?: string) =>
    axios
      .post(url, body, { headers: getHeaders(mediaType) })
      .then((response: AxiosResponse) => response.data),
  put: (url: string, body: {}, mediaType?: string) =>
    axios
      .put(url, body, { headers: getHeaders(mediaType) })
      .then((response: AxiosResponse) => response.data),
  delete: (url: string, mediaType?: string) =>
    axios
      .delete(url, { headers: getHeaders(mediaType) })
      .then((response: AxiosResponse) => response.data),
};

const Game = {
  list: (page: number) => queries.get(`/games?page=${page}`),
  getLastGames: (page: number) => queries.get(`/newestGames?page=${page}`),
  getGenres: () => queries.get("/gameGenres"),
  getComingGame: (page: number) => queries.get(`/upcomingGames?page=${page}`),
  getGameDetails: (gameId: number) => queries.get(`/gameDetails?id=${gameId}`),
  searchGames: (q: string, page: number) =>
    queries.get(`/search?q=${encodeURIComponent(q)}&page=${page}`),
};

const LikedGames = {
  getLikedGames: () => queries.get("/likedGames"),
  addOrUpdateLikedGames: (
    gameId: number,
    gameName: string,
    gameImage: string,
    isLiked: boolean
  ) => queries.post("/likedGames", { gameId, gameImage, gameName, isLiked }),
  getUserLikedGames: (userId: number) =>
    queries.get(`/userLikedGames:/${userId}`),
};

const FavoriGames = {
  getFavoriGames: () => queries.get("/favoriGames"),
  addOrUpdateFavoriGames: (
    gameId: number,
    gameName: string,
    gameImage: string,
    isFavorited: boolean
  ) =>
    queries.post(`/favoriGames`, { gameId, gameImage, gameName, isFavorited }),
  getUserFavoriGames: (userId: number) =>
    queries.get(`/userFavoriGames/${userId}`),
};
const request = {
  LikedGames,
  Game,
  FavoriGames,
};

export default request;
