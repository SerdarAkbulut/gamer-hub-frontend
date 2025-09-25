"use client";
import { getgameDetails } from "@/app/hooks/games/useGames";
import { GameDetailsProps } from "@/app/types/game";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function GameDetailsComponent({ gameId }: { gameId: number }) {
  const router = useRouter();

  const handleNewPost = (gameName: string) => {
    localStorage.setItem("gameName", gameName);
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

          {/* <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <GameDetailsComponent
                name={game.name}
                gamePosts={game.gamePosts}
              />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default GameDetailsComponent;
