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
