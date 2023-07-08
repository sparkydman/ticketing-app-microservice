import { object, string, TypeOf } from 'zod';

export const SignUpRequest = object({
  body: object({
    email: string({ required_error: 'Email is required' }).email(
      'Invalid email address'
    ),
    username: string({ required_error: 'Username is required' }).min(
      4,
      'Username must be at least 4 characters'
    ),
  }),
});

export type SignUpType = TypeOf<typeof SignUpRequest>;
