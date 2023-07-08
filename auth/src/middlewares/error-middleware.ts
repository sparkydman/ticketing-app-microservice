import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.errorStatusCode).send(err.serializeError);
  }

  res.status(500).send([{
    message: 'some thing went wrong',
  }])
};
