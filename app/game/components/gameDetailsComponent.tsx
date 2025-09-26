"use client";
import UserContent from "@/app/components/user-content/userContent";
import { getgameDetails } from "@/app/hooks/games/useGames";
import { setGame } from "@/app/store/game/gameSlice";
import { GameDetailsProps } from "@/app/types/game";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function GameDetailsComponent({ gameId }: { gameId: number }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNewPost = (gameName: string) => {
    dispatch(setGame({ gameId: gameId, gameName: gameName }));
    router.push("/new-post");
  };
  const { data: gameDetails } = getgameDetails(gameId);
  return (
    <div className="flex flex-col gap-5">
      {gameDetails?.map((game: GameDetailsProps, index: number) => (
        <div key={index} className="space-y-6">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 text-white rounded-lg flex justify-between items-center shadow-lg">
            <h1 className="text-3xl font-bold">{game.name}</h1>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNewPost(game.name)}
            >
              Yeni Konu
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <Button variant="outlined" className="hover:bg-gray-100 transition">
              Forumlar
            </Button>
            <Button variant="outlined" className="hover:bg-gray-100 transition">
              Videolar
            </Button>
          </div>
          {game.gamePosts.length > 0 ? (
            game.gamePosts?.map((item: any, index: number) => (
              <UserContent
                postId={item.id}
                userName={item.user.userName}
                gameName={item.gameName}
                postText={item.postText}
                postTitle={item.postTitle}
                key={index}
                userId={item.userId}
              />
            ))
          ) : (
            <p className=" text-gray-500">
              Henüz herhangi bir gönderi bulunmamaktadır.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default GameDetailsComponent;
