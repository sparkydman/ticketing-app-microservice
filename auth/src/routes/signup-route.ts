import { Request, Response, Router } from 'express';
import { SignUpRequest, SignUpType } from '../schema/signup-schema';
import { validateRequest } from '../middlewares/validation-middleware';
import { createUser } from '../controllers/signup-controller';

const router = Router();

router.post('/api/users/signup', validateRequest(SignUpRequest), createUser);

export { router as signupRouter };
