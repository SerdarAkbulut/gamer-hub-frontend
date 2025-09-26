import React from "react";
import GameDetailsComponent from "../components/gameDetailsComponent";
import { Props } from "@/app/types/pageProps";

async function Page({ params }: Props) {
  const { gameId } = await params;

  return (
    <div className="px-72 mt-20 ">
      <GameDetailsComponent gameId={gameId || 0} />
    </div>
  );
}

export default Page;
