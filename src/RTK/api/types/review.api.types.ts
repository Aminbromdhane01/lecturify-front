export interface CreateReviewDto {
    essayId : number;
    comments: string;
    rating: number;
   
  }
  
  export interface Review {
    id: number;
    comments: string;
    rating: number;
 
  }