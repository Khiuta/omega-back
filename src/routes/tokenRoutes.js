import { Router } from 'express';

const router = Router();

import tokenController from '../controllers/TokenController';

router.post('/', tokenController.store);

export default router;
