import { z } from 'zod';
import { gender } from './user.constant';

const createUserZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: 'userName is required',
    }),
    phoneNumber: z.string({
      required_error: 'phoneNumber is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    gender: z.enum([...gender] as [string, ...string[]], {
      required_error: 'Gender is required ',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
  }),
});
const loginUserZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: 'userName is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  loginUserZodSchema,
};
