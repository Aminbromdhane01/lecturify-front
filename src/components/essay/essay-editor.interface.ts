export interface Request {
    query: string;
  }
  
export interface RespondWith {
    string: (handler: (signal: AbortSignal) => Promise<string | void>) => void;
  }
  