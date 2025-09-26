import Link from "next/link";
import { Button } from "@mui/material";
import PopulerGamesComponent from "../../components/populerGamesComponent";
import { Props } from "@/app/types/pageProps";

export default async function Page({ params }: Props) {
  const { page } = await params;
  const usePage = page || 1;

  return (
    <>
      <PopulerGamesComponent page={usePage} />

      <div className="flex justify-center gap-4 mt-5">
        {usePage > 1 && (
          <Link href={`/games/populer-games/${Number(page) - 1}`}>
            <Button variant="contained" color="primary">
              Geri
            </Button>
          </Link>
        )}
        <Link href={`/games/populer-games/${Number(usePage) + 1}`}>
          <Button variant="contained" color="primary">
            İleri
          </Button>
        </Link>
      </div>
    </>
  );
}
