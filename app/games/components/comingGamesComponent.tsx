"use client";
import CardComponent from "@/app/components/gamesCard/cardComponent";
import { getComingGames } from "@/app/hooks/games/useGames";
import { GameProps } from "@/app/types/game";
import React, { useEffect } from "react";

function ComingGamesComponent({ page }: { page: number }) {
  const { data, refetch } = getComingGames(page);
  useEffect(() => {
    refetch();
  }, [page]);
  return (
    <div className="grid grid-cols-6 p-10 gap-10">
      {data?.map((item: GameProps, index: number) => (
        <div key={index}>
          <CardComponent {...item} />
        </div>
      ))}
    </div>
  );
}

export default ComingGamesComponent;
