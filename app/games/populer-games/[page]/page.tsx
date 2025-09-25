import { Metadata } from "next";
import { getGamesForSeo } from "@/app/hooks/games/useGames";
import Link from "next/link";
import { Button } from "@mui/material";
import PopulerGamesComponent from "../../components/populerGamesComponent";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;

  const games = await getGamesForSeo(parseInt(page) || 1);
  const gameNames = games.map((g: any) => g.name).join(", ");

  return {
    title: `Popüler Oyunlar `,
    description: `Sayfa ${page}  popüler oyunlar: ${gameNames}`,
    metadataBase: gameNames,
  };
}

export default async function Page({ params }: Props) {
  const { page } = await params;
  const usePage = parseInt(page);
  return (
    <>
      <PopulerGamesComponent page={usePage} />

      <div className="flex justify-center gap-4 mt-5">
        {usePage > 1 && (
          <Link href={`/games/populer-games/${usePage - 1}`}>
            <Button variant="contained" color="primary">
              Geri
            </Button>
          </Link>
        )}
        <Link href={`/games/populer-games/${usePage + 1}`}>
          <Button variant="contained" color="primary">
            İleri
          </Button>
        </Link>
      </div>
    </>
  );
}
