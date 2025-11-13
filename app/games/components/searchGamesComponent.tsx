"use client";
import CardComponent from "@/app/components/gamesCard/cardComponent";
import { getSearchGames } from "@/app/hooks/games/useGames";
import { GameProps } from "@/app/types/game";
import { Button } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function SearchGamesComponent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const query = searchParams.get("q") ?? "";
    const page = searchParams.get("page") ?? "";
    setSearchQuery(query);
    setPage(parseInt(page));
    refetch;
  }, [searchParams]);
  const { data, isError, refetch, isLoading } = getSearchGames(
    searchQuery,
    page
  );
  if (isLoading) return <div>Yükleniyor...</div>;

  if (isError || !data || data.length === 0) return <div>Oyun bulunamadı</div>;

  return (
    <>
      <div className="grid grid-cols-6 p-10 gap-10">
        {data?.map((item: GameProps, index: number) => (
          <div key={index}>
            <CardComponent {...item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-5">
        {page > 1 && (
          <Link
            href={`/games/search?q=${searchQuery}&page=${Number(page) - 1}`}
          >
            <Button variant="contained" color="primary">
              Geri
            </Button>
          </Link>
        )}
        <Link href={`/games/search?q=${searchQuery}&page=${Number(page) + 1}`}>
          <Button variant="contained" color="primary">
            İleri
          </Button>
        </Link>
      </div>
    </>
  );
}

export default SearchGamesComponent;
