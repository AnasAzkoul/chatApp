import bcrypt from 'bcryptjs';
import { Types } from 'mongoose';

export const hashPassword = async(password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

export const matchPassword = async(enteredPassword: string, originalPassword: string) => {
  return await bcrypt.compare(enteredPassword, originalPassword)
}
