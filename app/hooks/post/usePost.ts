import request from "@/app/api/request";
import { useMutation, useQuery } from "@tanstack/react-query";
import { error } from "console";
import { toast } from "react-toastify";

export const getAllPost = () => {
  return useQuery({
    queryKey: ["post"],
    queryFn: () => request.Post.postList(),
  });
};
export const getFavoritedGamesPosts = () => {
  return useQuery({
    queryKey: ["favoriGamesPost"],
    queryFn: () => request.Post.myFavoriGamesPostList(),
  });
};

export const addPost = () => {
  return useMutation({
    mutationFn: (values: {
      gameId: number;
      gameName: string;
      postTitle: string;
      postText: string;
    }) =>
      request.Post.addPost(
        values.gameId,
        values.gameName,
        values.postTitle,
        values.postText
      ),
  });
};
export const getPostDetails = (postId: number) => {
  return useQuery({
    queryKey: ["postDetails", postId],
    queryFn: () => request.Post.postDetails(postId),
  });
};

export const savePost = () => {
  return useMutation({
    mutationFn: (postId: number) => request.Post.savePost(postId),
    onError: (error: any) => {
      return toast.error(error.response.data);
    },
  });
};

export const getUserPosts = (userId: number) => {
  return useQuery({
    queryKey: ["userPosts", userId],
    queryFn: () => request.Post.userPosts(userId),
  });
};
