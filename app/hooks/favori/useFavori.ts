import request from "@/app/api/request";
import { useMutation, useQuery } from "@tanstack/react-query";

export const updateFavori = () => {
  return useMutation({
    mutationFn: (values: {
      gameId: number;
      gameName: string;
      gameImage: string;
      isFavorited: boolean;
    }) =>
      request.FavoriGames.addOrUpdateFavoriGames(
        values.gameId,
        values.gameName,
        values.gameImage,
        values.isFavorited,
      ),
  });
};
export const getFavoriGames = () => {
  return useQuery({
    queryKey: ["favoriGames"],
    queryFn: () => request.FavoriGames.getFavoriGames(),
  });
};
