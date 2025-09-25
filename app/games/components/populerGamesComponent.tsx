"use client";

import CardComponent from "@/app/components/gamesCard/cardComponent";
import { getGames } from "@/app/hooks/games/useGames";
import { GameProps } from "@/app/types/game";
import React from "react";

function PopulerGamesComponent({ page }: { page: number }) {
  const { data } = getGames(page);

  return (
    <div className="grid grid-cols-4 p-10 gap-10">
      {data?.map((item: GameProps, index: number) => (
        <div key={index}>
          <CardComponent {...item} />
        </div>
      ))}
    </div>
  );
}

export default PopulerGamesComponent;
