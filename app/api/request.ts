import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://project-a-06ts.onrender.com/api/";

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

    if (config.headers) {
      if (token) {
        config.headers.Authorization = `${token}`;
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
  userLikedGames: (userId: number) => queries.get(`/userLikedGames/${userId}`),
  userFavoritedGames: (userId: number) =>
    queries.get(`/userFavoritedGames/${userId}`),
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

const Follow = {
  followUser: (followingId: number) =>
    queries.post("/addFollow", { followingId }),
  unFollowUser: (followingId: number) =>
    queries.post("/unFollow", { followingId }),
  userFollower: (id: number) => queries.get(`/userFollower/${id}`),
  userFollowing: (id: number) => queries.get(`/userFollowing/${id}`),
};
const Post = {
  addPost: (
    gameId: number,
    gameName: string,
    postTitle: string,
    postText: string
  ) => queries.post("/addPost", { gameId, gameName, postTitle, postText }),
  deletePost: (postId: number) => queries.delete(`/deletePost/${postId}`),
  savePost: (postId: number) => queries.post("/addSavePost", { postId }),
  addComment: (postId: number, reply: string) =>
    queries.post("/comment", { postId, reply }),
  addFeaturePst: (postId: number) => queries.post("/featurePost", { postId }),
  postList: () => queries.get("/postList"),
  postDetails: (postId: number) => queries.get(`/postDetails/${postId}`),
  myFavoriGamesPostList: () => queries.get("/favoriGame/postList"),
  userPosts: (userId: number) => queries.get(`/userPosts/${userId}`),
  myPosts: () => queries.get("/myPosts"),
  savedPosts: () => queries.get("/savedPost"),
  featurePosts: () => queries.get("/featurePosts"),
};

const Auth = {
  register: (email: string, userName: string, password: string) =>
    queries.post("/register", { email, userName, password }),
  login: (email: string, password: string) =>
    queries.post("/login", { email, password }),
  userDetails: (userId: number) => queries.get(`/user/${userId}`),
  updateProfile: (
    userName: string,
    email: string,
    currentPassword: string,
    password: string
  ) => queries.put("/user", { userName, email, currentPassword, password }),
  forgotPassword: (email: string) =>
    queries.post("/forgot-password", { email }),
  resetPassword: (token: string, newPassword: string) =>
    queries.post("/reset-password", { token, newPassword }),
  checkResetToken: (token: string) =>
    queries.get(`/check-reset-token/${token}`),
};

const request = {
  LikedGames,
  Game,
  FavoriGames,
  Follow,
  Post,
  Auth,
};

export default request;
