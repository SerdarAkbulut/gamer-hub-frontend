import React from "react";
import LastGamesComponent from "../../components/lastGamesComponent";
import Link from "next/link";
import { Button } from "@mui/material";
import { Metadata } from "next";
import { getLastGamesForSeo } from "@/app/hooks/games/useGames";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;

  const games = await getLastGamesForSeo(parseInt(page) || 1);
  const gameNames = games.map((g: any) => g.name).join(", ");

  return {
    title: `Son Çıkan Oyunlar `,
    description: `Sayfa ${page}  Son çıkan oyunlar: ${gameNames}`,
    metadataBase: gameNames,
  };
}
async function Page({ params }: Props) {
  const { page } = await params;
  const usePage = parseInt(page);
  return (
    <div>
      <LastGamesComponent page={usePage} />
      <div className="flex justify-center gap-4 mt-5">
        {usePage > 1 && (
          <Link href={`/games/last-games/${usePage - 1}`}>
            <Button variant="contained" color="primary">
              Geri
            </Button>
          </Link>
        )}
        <Link href={`/games/last-games/${usePage + 1}`}>
          <Button variant="contained" color="primary">
            İleri
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
