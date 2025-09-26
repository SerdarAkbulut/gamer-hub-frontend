import { Props } from "@/app/types/pageProps";
import React from "react";
import PostDetails from "../component/component";
async function PostPage({ params }: Props) {
  const { postId } = await params;
  console.log(postId);
  return (
    <div>
      <PostDetails postId={postId || 0} />
    </div>
  );
}

export default PostPage;
