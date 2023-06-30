import { Router } from 'express';

const router = Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('this is currentuser route');
});

export { router as currentuserRouter };
