import asyncHandler from 'express-async-handler';
import User from '../model/user';
import bcrypt from 'bcryptjs';
import { Request, Response, RequestHandler } from 'express';
import generateToken from '../utils/generateToken';
import { matchPassword } from '../utils/hashPassword';

// @desc   Auth user / set token
// route   api/v1/users/auth
// access  public
export const authUser: RequestHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  const isPassword = await matchPassword(password, userExists?.password!);

  if (userExists && isPassword) {
    generateToken(res, userExists._id)

    res.status(201).json({
      id: userExists._id,
      userName: userExists.userName,
      email: userExists.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
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
      generateToken(res, user._id);

      res.status(201).json({
        id: user._id,
        userName: user.userName,
        email: user.email,
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
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    
    res.status(200).json({ message: 'user logged out' });
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
