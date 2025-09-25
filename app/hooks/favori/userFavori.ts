import request from "@/app/api/request";
import { useMutation } from "@tanstack/react-query";

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
        values.gameImage,
        values.gameName,
        values.isFavorited
      ),
  });
};
