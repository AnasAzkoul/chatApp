import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const User = mongoose.model('User', userSchema);



export default User;
