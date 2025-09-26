import Link from "next/link";
import { Button } from "@mui/material";
import PopulerGamesComponent from "../../components/populerGamesComponent";

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
