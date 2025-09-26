import CardComponent from "@/app/components/gamesCard/cardComponent";
import { getUserLikedGames } from "@/app/hooks/games/useGames";
import { GameProps } from "@/app/types/game";
import React from "react";

function Liked({ userId }: { userId: number }) {
  const { data } = getUserLikedGames(userId);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-12">
      {data?.map((game: GameProps, index: number) => (
        <CardComponent
          key={index}
          cover_url={game.cover_url}
          id={game.id}
          isFavorited={game.isFavorited}
          isLiked={game.isLiked}
          name={game.name}
          isHidden={true}
        />
      ))}
    </div>
  );
}

export default Liked;
