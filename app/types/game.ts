export interface GameProps {
  id: number;
  gameId?: number;
  name: string;
  cover_url: string;
  isLiked: boolean | null;
  isFavorited: boolean;
}

export interface CardListProps {
  id: number;
  gameId?: number;
  name: string;
  cover_url: string;
  isLiked: boolean | null;
  isFavorited: boolean;
  isHidden?: boolean;
}
export interface GameDetailsProps {
  id: number;
  name: string;
  gamePosts: [
    {
      id: number;
      userId: number;
      user: {
        userName: string;
      };
      gameName: string;
      postTitle: string;
      postText: string;
    }
  ];
}

export interface GamePosts {
  postTitle?: string;
  gameName?: string;
  postText?: string;
  userName?: string;
  gameId?: number;
  postId: number;
  userId?: number;
  deletePost?: boolean;
}
export interface AllPostProps {
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
export interface FollowGamesAndUserProps {
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
