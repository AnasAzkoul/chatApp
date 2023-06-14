import {z} from 'zod';

export const newUser = z.object({
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string(),
  gender: z.string(),
  age: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
})

export type NewUserTypes = z.infer<typeof newUser>
