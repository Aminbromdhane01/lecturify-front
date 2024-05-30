export interface CreateCommentDto {
    text: string;
    bookId: number;
    userId : number;
}  
export interface UpdateCommentDto {
    text: string;

}
export interface Comment {
    id: number;
    text: string;
    sentiment: string;
    createdAt: Date;
    userId: number;
    bookId: number;
  }
  