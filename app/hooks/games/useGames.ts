import request from "@/app/api/request";
import { useQuery } from "@tanstack/react-query";

export const getGames = (page: number) => {
  return useQuery({
    queryKey: ["games", page],
    queryFn: () => request.Game.list(page),
  });
};

export const getLastGames = (page: number) => {
  return useQuery({
    queryKey: ["lastGames", page],
    queryFn: () => request.Game.getLastGames(page),
  });
};

export const getgameDetails = (gameId: number) => {
  return useQuery({
    queryKey: ["Game", gameId],
    queryFn: () => request.Game.getGameDetails(gameId),
  });
};

export const getGameGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => request.Game.getGenres(),
  });
};
export const getComingGames = (page: number) => {
  return useQuery({
    queryKey: ["comingGames", page],
    queryFn: () => request.Game.getComingGame(page),
  });
};
export const getSearchGames = (q: string, page: number) => {
  return useQuery({
    queryKey: ["searchGames", q, page],
    queryFn: () => request.Game.searchGames(q, page),
  });
};

export const getUserFavoriGames = (userId: number) => {
  return useQuery({
    queryKey: ["userFavoriGames", userId],
    queryFn: () => request.Game.userFavoritedGames(userId),
  });
};
export const getUserLikedGames = (userId: number) => {
  return useQuery({
    queryKey: ["userLikedGames", userId],
    queryFn: () => request.Game.userLikedGames(userId),
  });
};
