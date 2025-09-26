import { getFavoritedGamesPosts } from "@/app/hooks/post/usePost";
import React from "react";
import UserContent from "../user-content/userContent";
import { FollowGamesAndUserProps } from "@/app/types/game";

function FollowGamesAndUser() {
  const { data } = getFavoritedGamesPosts();
  return (
    <div>
      {data?.map((item: FollowGamesAndUserProps, index: number) => (
        <>
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
        </>
      ))}
    </div>
  );
}

export default FollowGamesAndUser;
