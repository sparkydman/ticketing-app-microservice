import { Request, Response } from 'express';
import { SignUpType } from '../schema/signup-schema';
import { addUser, getUser } from '../services/auth-services';
import { ExceptionError } from '../errors/error-exception';

export const createUser = async (
  req: Request<{}, {}, SignUpType['body']>,
  res: Response
) => {
  try {
    let user = await getUser({ email: req.body.email });
    if (user) {
      throw new ExceptionError('Email already exists', 403);
    }
    let newUser = await addUser(req.body);
    res.status(201).send(newUser);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
