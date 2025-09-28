"use client";
import { getPostDetails, savePost } from "@/app/hooks/post/usePost";
import { SvgIcon } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";
import { PostDetailsProps } from "@/app/types/post";

function PostDetails({ postId }: { postId: number }) {
  const { data, refetch } = getPostDetails(postId);
  console.log(data);
  const { mutate, isSuccess } = savePost();
  if (isSuccess) {
    refetch();
  }
  return (
    <div className="mt-20 xl:px-72 px-32 md:px-48 sm:px-20 lg:px-52">
      {data?.postDetails.map((post: PostDetailsProps, index: number) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        >
          <div className="bg-blue-600 text-white p-6 flex justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold">{post.user.userName}</h1>
              <h2 className="text-lg opacity-80">{post.gameName}</h2>
            </div>
            <div>
              <SvgIcon
                component={BookmarkIcon}
                inheritViewBox
                className={`h-8 w-8 hover:cursor-pointer ${
                  post.isSaved ? "text-[#e01919]" : "text-white"
                }`}
                onClick={() => mutate(postId)}
              />
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800">
              {post.postTitle}
            </h1>
            <p className="text-lg text-gray-700 mt-2">{post.postText}</p>
          </div>

          <div className="p-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Yanıtlar
            </h3>
            {post.replies?.length > 0 ? (
              post.replies.map((reply: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4"
                >
                  <p className="text-sm font-semibold text-gray-700">
                    {reply?.user?.userName}
                  </p>
                  <p className="text-gray-800 mt-1">{reply?.reply}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Henüz yanıt yok.</p>
            )}
          </div>
        </div>
      ))}
      {/* <div className="flex ml-5 mt-12">
        <CommentPage></CommentPage>
      </div> */}
    </div>
  );
}

export default PostDetails;
