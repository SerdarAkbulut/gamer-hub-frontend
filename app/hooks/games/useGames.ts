import request from "@/app/api/request";
import { useQuery } from "@tanstack/react-query";
const baseURL = "http://localhost:3000/api/";

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
export async function getGamesForSeo(page: number) {
  const res = await fetch(`${baseURL}games?page=${page}`);
  const data = await res.json();
  return data;
}

export async function getLastGamesForSeo(page: number) {
  const res = await fetch(`${baseURL}games?page=${page}`);
  const data = await res.json();
  return data;
}
