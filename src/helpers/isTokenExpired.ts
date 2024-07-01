import jwt from 'jsonwebtoken';

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwt.decode(token) as { exp: number };
    if (!decodedToken || !decodedToken.exp) {
      return true;
    }

    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true;
  }
};