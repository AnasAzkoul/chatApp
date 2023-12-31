import { z } from 'zod';

// <--------------------------------------------------->
export interface UserResponseData {
  id: string;
  userName: string;
  email: string;
}

// <--------------------------------------------------->

export interface FormErrorTypes {
  [key: string | number]: string;
}

// <--------------------------------------------------->

export type SigninFormPassword = 'password' | 'text';

// <--------------------------------------------------->

export type RegisterFormPasswords = {
  password: 'password' | 'text';
  confirmPassword: 'password' | 'text';
};

// <--------------------------------------------------->
export const RoomsResult = z.object({
  _id: z.string(),
  name: z.string(),
})

export type RoomsResultTypes = z.infer<typeof RoomsResult>
// <--------------------------------------------------->

export const newUser = z.object({
  firstName: z
    .string()
    .toLowerCase()
    .min(3, 'First Name has to be at least three characters long'),
  lastName: z
    .string()
    .toLowerCase()
    .min(3, 'First Name has to be at least three characters long'),
  userName: z
    .string()
    .toLowerCase()
    .min(6, 'user name has to be at least six characters long'),
  gender: z.enum(['male', 'female', 'other']),
  age: z.string(),
  email: z.string().email('Invalid Email'),
  password: z.string(),
  confirmPassword: z.string(),
});

export type NewUserTypes = z.infer<typeof newUser>;
