import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
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
        userName: Schema.Types.userName,
        ref: 'User',
      },
    ],
  },
  {
    TimeStamps: true,
  }
);

const User = mongoose.model('User', userSchema);

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   return this.password = await bcrypt.hash(this.password, salt);
// });

export default User;
