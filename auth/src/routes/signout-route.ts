import { Router } from 'express';

const router = Router();

router.post('/api/users/signout', (req, res) => {
  res.send('this is signout route');
});

export { router as signoutRouter };
