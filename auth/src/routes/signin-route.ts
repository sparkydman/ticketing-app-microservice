import { Router } from 'express';

const router = Router();

router.post('/api/users/signin', (req, res) => {
  res.send('this is signin route');
});

export { router as signinRouter };
