import asyncHandler from 'express-async-handler';
import User from '../model/user.js';

// @desc   Auth user / set token
// route   api/v1/users/auth
// access  public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).json('Auth user');
});

// @desc   Register a new user
// route   api/v1/users/register
// access  public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, userName, gender, age, email, password } =
    req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error('user already exists');
  }

  const user = await User.create({
    firstName,
    lastName,
    userName,
    gender,
    age,
    email,
    password,
  });

  if (user) {
    return res.status(201).json({
      id: user._id,
      userName: user.userName,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc   Logout a user
// route   api/v1/users/logout
// access  public
const logoutUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).json('Logout user');
});

// @desc   get a user's profile
// route   api/v1/users/profile
// access  private
const getUserProfile = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).json('get user profile');
});

// @desc   PUT update a user's profile
// route   api/v1/users/profile
// access  private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).json('get user profile');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
