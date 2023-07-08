import { Request, Response, Router } from 'express';
import { SignUpRequest, SignUpType } from '../schema/signup-schema';
import { validateRequest } from '../middlewares/validation-middleware';

const router = Router();

router.post(
  '/api/users/signup',
  validateRequest(SignUpRequest),
  (req: Request<{}, {}, SignUpType['body']>, res: Response) => {
    res.send('this is signup route');
  }
);

export { router as signupRouter };
