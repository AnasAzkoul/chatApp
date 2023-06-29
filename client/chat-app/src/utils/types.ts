import { z } from 'zod';

export interface UserResponseData  {
  id: string,
  userName: string,
  email: string
}

export interface FormErrorTypes {
  [key: string | number]: string
}

export type SigninFormPassword = 'password' | 'text';

export type RegisterFormPasswords = {
  password: 'password' | 'text';
  confirmPassword: 'password' | 'text';
};

// export const newUser = z
//   .object({
//     firstName: z
//       .string()
//       .toLowerCase()
//       .min(3, 'First Name has to be at least three characters long'),
//     lastName: z
//       .string()
//       .toLowerCase()
//       .min(3, 'First Name has to be at least three characters long'),
//     userName: z
//       .string()
//       .toLowerCase()
//       .min(6, 'user name has to be at least six characters long'),
//     gender: z.enum(['male', 'female', 'other']),
//     age: z.string(),
//     email: z.string().email('Invalid Email'),
//     password: z.string(),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'passwords do not match',
//     path: ['confirmPassword'],
//   })
//   .refine((data) => typeof parseInt(data.age) === 'number', {
//     message: 'You need to write a number please',
//     path: ['age'],
//   });

// export type NewUserTypes = z.infer<typeof newUser>;
