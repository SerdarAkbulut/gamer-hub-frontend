"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@mui/material";
import Favorited from "../favorited/favorited";
import Liked from "../liked/liked";
import UserPosts from "../posts/posts";
import { UserDetails } from "@/app/hooks/auth/useAuth";

function Page() {
  const [selectedOption, setSelectedOption] = useState("40");
  const params = useParams();
  const userId = params.userId?.toString() || "";
  const { data } = UserDetails(parseInt(userId));

  const renderComponent = () => {
    switch (selectedOption) {
      case "20":
        return <Favorited userId={parseInt(userId) || 0} />;
      case "30":
        return <Liked userId={parseInt(userId) || 0} />;
      case "40":
        return <UserPosts userId={parseInt(userId) || 0} />;
      default:
        return null;
    }
  };

  return (
    <div className="px-5 mt-20 flex flex-col gap-6 md:px-48 sm:px-20 lg:px-52 xl:px-72">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 flex flex-col items-center text-white relative">
        <div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-400 shadow-md flex items-center justify-center text-indigo-600 text-2xl font-bold">
          {data?.user.userName?.[0]?.toUpperCase() ?? "U"}
        </div>
        <h1 className="text-3xl font-semibold mt-4 drop-shadow-lg">
          {data?.user.userName}
        </h1>
      </div>

      <div className="flex gap-4 justify-center mt-2">
        <Button
          color="primary"
          variant={selectedOption === "40" ? "contained" : "outlined"}
          size="small"
          onClick={() => setSelectedOption("40")}
          sx={{ textTransform: "none", borderRadius: "20px", px: 3 }}
        >
          Paylaşımlar
        </Button>
        <Button
          color="primary"
          variant={selectedOption === "20" ? "contained" : "outlined"}
          size="small"
          onClick={() => setSelectedOption("20")}
          sx={{ textTransform: "none", borderRadius: "20px", px: 3 }}
        >
          Favori Oyunlar
        </Button>
        <Button
          color="primary"
          variant={selectedOption === "30" ? "contained" : "outlined"}
          size="small"
          onClick={() => setSelectedOption("30")}
          sx={{ textTransform: "none", borderRadius: "20px", px: 3 }}
        >
          Beğendiği Oyunlar
        </Button>
      </div>

      <div className="bg-gray-50 rounded-2xl shadow-sm p-6 min-h-[300px]">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Page;
