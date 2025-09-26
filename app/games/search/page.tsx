import React, { Suspense } from "react";
import SearchGamesComponent from "../components/searchGamesComponent";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchGamesComponent />
    </Suspense>
  );
}

export default Page;
