import { Router } from 'express';

const router = Router();

router.post('/api/users/signup', (req, res) => {
  res.send('this is signup route');
});

export { router as signupRouter };
