import React from "react";
import GameDetailsComponent from "../components/gameDetailsComponent";

async function Page({ params }: Props) {
  const { gameId } = await params;

  return (
    <div className="px-72 mt-20 ">
      <GameDetailsComponent gameId={gameId} />
    </div>
  );
}

export default Page;
