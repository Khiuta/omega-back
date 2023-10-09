import { Router } from 'express';

const router = Router();

import intelectController from '../controllers/IntelectController';

router.post('/', intelectController.store);
router.put('/:id', intelectController.update);

export default router;
