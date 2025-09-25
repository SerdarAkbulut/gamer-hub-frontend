"use client";

import CardComponent from "@/app/components/gamesCard/cardComponent";
import { getLastGames } from "@/app/hooks/games/useGames";
import { GameProps } from "@/app/types/game";
import React from "react";

function LastGamesComponent({ page }: { page: number }) {
  const { data } = getLastGames(page);

  return (
    <div>
      <div className="grid grid-cols-4 p-10 gap-10">
        {data?.map((item: GameProps, index: number) => (
          <div key={index}>
            <CardComponent {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastGamesComponent;
