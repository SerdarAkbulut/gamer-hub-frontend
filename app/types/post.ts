export interface PostDetailsProps {
  id: number;
  gameId?: number;
  gameName?: string;
  postId?: number;
  postText?: string;
  user: { userName: string };
  isSaved: boolean;
  postTitle?: string;
  replies: { id: number; reply: string; user: { userName: string } }[];
}
export interface UserContentProps {
  gameId?: number;
  gameName?: string;
  postId?: number;
  postText?: string;
  postTitle?: string;
  userId?: number;
  userName?: string;
  id: number;
  user: {
    userName: string;
  };
}
