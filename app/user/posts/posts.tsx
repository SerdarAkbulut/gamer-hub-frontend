import UserContent from "@/app/components/user-content/userContent";
import { getUserPosts } from "@/app/hooks/post/usePost";
import { UserContentProps } from "@/app/types/post";
import React from "react";

function UserPosts({ userId }: { userId: number }) {
  const { data } = getUserPosts(userId);

  return (
    <div className="flex flex-col gap-5">
      {data?.map((items: UserContentProps, index: number) => (
        <UserContent
          postId={items.id}
          gameName={items.gameName}
          postText={items.postText}
          postTitle={items.postTitle}
          gameId={items.gameId}
          userName={items.user.userName}
          userId={items.userId}
          key={index}
        />
      ))}
    </div>
  );
}

export default UserPosts;
