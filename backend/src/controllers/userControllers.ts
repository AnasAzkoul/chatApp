import asyncHandler from 'express-async-handler';
import User from '../model/user.js';
import bcrypt from 'bcryptjs';
import { Request, Response, RequestHandler } from 'express';

// @desc   Auth user / set token
// route   api/v1/users/auth
// access  public
export const authUser: RequestHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).json('Auth user');
});

// @desc   Register a new user
// route   api/v1/users/register
// access  public
export const registerUser: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { firstName, lastName, userName, gender, age, email, password } =
      req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error('user already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      userName,
      gender,
      age,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        id: user._id,
        userName: user.userName,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  }
);

// @desc   Logout a user
// route   api/v1/users/logout
// access  public
export const logoutUser: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(201).json('Logout user');
  }
);

// @desc   get a user's profile
// route   api/v1/users/profile
// access  private
export const getUserProfile: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(201).json('get user profile');
  }
);

// @desc   PUT update a user's profile
// route   api/v1/users/profile
// access  private
export const updateUserProfile: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(201).json('get user profile');
  }
);
