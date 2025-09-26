import request from "@/app/api/request";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const updateLike = () => {
  return useMutation({
    mutationFn: (values: {
      gameId: number;
      gameName: string;
      gameImage: string;
      isLiked: boolean;
    }) =>
      request.LikedGames.addOrUpdateLikedGames(
        values.gameId,
        values.gameImage,
        values.gameName,
        values.isLiked
      ),
  });
};
