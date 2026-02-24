import React from "react";
import CardComponent from "../gamesCard/cardComponent";
import { get } from "http";
import { getFavoriGames } from "@/app/hooks/favori/useFavori";
import { CardListProps } from "@/app/types/game";

function KaydedilenlerComponent() {
  const { data } = getFavoriGames();
  console.log(data);
  return (
    <div className="grid grid-cols-6 gap-4">
      {data?.map((item: CardListProps, index: number) => (
        <div key={index}>
          <CardComponent
            cover_url={item.cover_url}
            id={item.id}
            isFavorited={item.isFavorited}
            isLiked={item.isFavorited}
            name={item.name}
            gameId={item.gameId}
            isHidden={false}
          />
        </div>
      ))}
    </div>
  );
}

export default KaydedilenlerComponent;
