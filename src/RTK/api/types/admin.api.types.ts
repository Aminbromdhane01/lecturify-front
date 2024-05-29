export interface BookCountByMonth {
    month: string;
    count: number;
  }
  export interface CommentCountBySentiment {
    sentiment: string;
    count: number;
  }
  export interface BookGroupedByGenre {
    genre: string;
    count: number;
}