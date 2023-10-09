import { Router } from 'express';

const router = Router();

import agilityController from '../controllers/AgilityController';

router.put('/:id', agilityController.update);
router.post('/', agilityController.store);

export default router;
