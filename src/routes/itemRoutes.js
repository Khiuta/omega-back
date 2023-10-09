import { Router } from 'express';

const router = Router();

import itemController from '../controllers/ItemController';

router.post('/', itemController.store);
router.put('/:id', itemController.update);

export default router;
