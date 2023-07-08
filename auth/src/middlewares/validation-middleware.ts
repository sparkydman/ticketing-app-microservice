import { AnyZodObject, ZodError, ZodIssue } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { IErrorData } from '../errors/custom-error';

export const validateRequest =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        const customErr = error.errors.map(
          (err: ZodIssue, index: number): IErrorData => {
            return {
              message: err.message,
              field: err.path.join('.'),
            };
          }
        ) as IErrorData[];

        return res.status(400).send(customErr);
      }
    }
  };
