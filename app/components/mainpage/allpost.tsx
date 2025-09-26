import { getAllPost } from "@/app/hooks/post/usePost";
import React from "react";
import UserContent from "../user-content/userContent";
import { AllPostProps } from "@/app/types/game";

function AllPost() {
  const { data } = getAllPost();
  if (data?.length === 0) {
    return (
      <div className="flex justify-center text-red-400">
        henüz paylaşım yapılmamış
      </div>
    );
  }
  return (
    <div>
      {data?.map((item: AllPostProps, index: number) => (
        <UserContent
          key={index}
          gameId={item.gameId}
          gameName={item.gameName}
          postId={item.id}
          postText={item.postText}
          postTitle={item.postTitle}
          userId={item.userId}
          userName={item.user.userName}
        />
      ))}
    </div>
  );
}

export default AllPost;
