import React from "react";
import ComingGamesComponent from "../../components/comingGamesComponent";
import Link from "next/link";
import { Button } from "@mui/material";
import { Props } from "@/app/types/pageProps";

async function page({ params }: Props) {
  const { page } = await params;
  const usePage = page || 1;
  return (
    <div>
      <ComingGamesComponent page={usePage} />
      <div className="flex justify-center gap-4 mt-5">
        {usePage > 1 && (
          <Link href={`/games/coming-games/${usePage - 1}`}>
            <Button variant="contained" color="primary">
              Geri
            </Button>
          </Link>
        )}
        <Link href={`/games/coming-games/${usePage + 1}`}>
          <Button variant="contained" color="primary">
            İleri
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default page;
