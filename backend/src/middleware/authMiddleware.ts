import jwt, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';
import User from '../model/user';
import { Response, Request, NextFunction } from 'express';

export async function protectRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      if (typeof decoded === 'object') {
        // @ts-ignore
        req.user = await User.findById(decoded.userId!).select('-password');
        next();
      }
    } catch (error) {
      if (error instanceof Error || error instanceof JsonWebTokenError) {
        res.status(401).json({
          errName: error.name,
          errStack: error.stack,
          errMsg: error.message,
        });
      }
    }
  } else {
    res.status(401).json({ message: 'Not Authorized, no token' });
    // throw new Error('Not Authorized, no token ');
  }
}

export async function checkToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.jwt;
  if (token) {
    const encoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    // @ts-ignore
    req.user = await getUserFromToken(encoded.userId);
  }
  next();
}

export async function getUserFromToken(token: string) {
  const user = await User.findById(token).select('-password');
  return user;
}
