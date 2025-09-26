import React from "react";
import LastGamesComponent from "../../components/lastGamesComponent";
import Link from "next/link";
import { Button } from "@mui/material";
import { Props } from "@/app/types/pageProps";

async function Page({ params }: Props) {
  const { page } = await params;
  const usePage = page || 1;
  return (
    <div>
      <LastGamesComponent page={usePage} />
      <div className="flex justify-center gap-4 mt-5">
        {usePage > 1 && (
          <Link href={`/games/last-games/${Number(page) - 1}`}>
            <Button variant="contained" color="primary">
              Geri
            </Button>
          </Link>
        )}
        <Link href={`/games/last-games/${Number(usePage) + 1}`}>
          <Button variant="contained" color="primary">
            İleri
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
