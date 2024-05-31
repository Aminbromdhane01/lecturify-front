import { AuthResponse } from "./auth-api.types";

export interface Essay {
    id: number;
    title: string;
    content: string;
    isReviewd : boolean;
    user? : AuthResponse
}
export interface CreateEssayDto {
    userId : number;
    title: string;
    content: string; 
}
export interface UpdateEssayDto {
    title?: string;
    content?: string; 
    isReviewed?: boolean;
}