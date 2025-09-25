"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { updateLike } from "@/app/hooks/Like/useLike";
import { updateFavori } from "@/app/hooks/favori/userFavori";
import { toast } from "react-toastify";
import { CardListProps } from "@/app/types/game";

function CardComponent({
  id,
  cover_url,
  isFavorited,
  isLiked,
  name,
  gameId,
  isHidden,
}: CardListProps) {
  const [likeState, setLikeState] = useState<boolean | null>(isLiked);
  const [favorite, setFavorite] = useState<boolean>(isFavorited);
  const { mutate: liked, isSuccess: successLike } = updateLike();
  const { mutate: favorited, isSuccess: successFavroi } = updateFavori();

  return (
    <div>
      <Card className="flex flex-col border-2 border-gray-300 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105  ">
        <CardHeader
          subheader={name}
          className="text-lg font-bold text-gray-700  py-2 h-16 "
        />
        <Divider />
        <Link href={`/game/${id ?? gameId}`}>
          <img
            src={cover_url}
            alt="Resim Bulunamadı"
            className="object-contain h-[500px] w-full "
          />
        </Link>
        {!isHidden && (
          <CardContent className="flex items-center gap-3 px-4 py-3">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: likeState === true ? [1, 1.5, 1] : 1 }}
                transition={{ duration: 1.0, ease: "circInOut" }}
              >
                <ThumbUpAltIcon
                  className={`cursor-pointer ${
                    likeState === true ? "text-blue-500" : "text-gray-400"
                  }`}
                  onClick={() => {
                    if (!successLike) {
                      toast.error("Giriş yapmalısınız");
                      return;
                    }
                    const newLikeState = likeState === true ? null : true;
                    setLikeState(newLikeState);
                    liked({
                      gameId: id,
                      gameName: name,
                      gameImage: cover_url,
                      isLiked: isLiked || false,
                    });
                  }}
                />
              </motion.div>

              <motion.div
                animate={{ scale: likeState === false ? [1, 1.5, 1] : 1 }}
                transition={{ duration: 1.0, ease: "circInOut" }}
              >
                <ThumbDownAltIcon
                  className={`cursor-pointer ${
                    likeState === false ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={() => {
                    if (!successLike) {
                      toast.error("Giriş yapmalısınız");
                      return;
                    }
                    const newLikeState = likeState === false ? null : false;
                    setLikeState(newLikeState);
                    liked({
                      gameId: id,
                      gameName: name,
                      gameImage: cover_url,
                      isLiked: isLiked || false,
                    });
                  }}
                />
              </motion.div>
            </div>

            <motion.div
              animate={favorite ? { scale: [1, 1.8, 1] } : { scale: 1 }}
              transition={{ duration: 1.0, ease: "circInOut" }}
              className="ml-auto"
            >
              <FavoriteIcon
                className={`cursor-pointer ${
                  favorite ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => {
                  if (!successFavroi) {
                    toast.error("Giriş yapmalısınız");
                    return;
                  }
                  setFavorite(!favorite);
                  favorited({
                    gameId: id,
                    gameImage: cover_url,
                    gameName: name,
                    isFavorited: isFavorited,
                  });
                }}
              />
            </motion.div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default CardComponent;
