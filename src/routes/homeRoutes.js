import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('olá');
});

export default router;
