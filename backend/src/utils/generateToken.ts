import jwt from 'jsonwebtoken'
import { type Response } from 'express';
import { Types } from 'mongoose';

const generateToken = (res: Response, userId: Types.ObjectId) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET!, {
    expiresIn: '30D'
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: 'strict',
    secure: false,
  })
}

export default generateToken;
