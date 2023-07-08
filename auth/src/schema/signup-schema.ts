import { object, string, TypeOf } from 'zod';
import _ from 'lodash';

export const SignUpRequest = object({
  body: object({
    email: string({ required_error: 'Email is required' }).email(
      'Invalid email address'
    ),
    firstname: string({ required_error: 'firstname is required' }),
    lastname: string({ required_error: 'lastname is required' }),
    password: string({ required_error: 'password is required' }).min(
      6,
      'password must be at least 6 characters'
    ),
    confirmPassword: string({ required_error: 'confirmPassword is required' }),
  }).refine((d) => d.password === d.confirmPassword, {
    message: 'password dont match',
    path: ['confirmPassword'],
  }),
});

export type SignUpType = Omit<
  TypeOf<typeof SignUpRequest>,
  'body.confirmPassword'
>;
