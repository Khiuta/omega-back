import { Router } from 'express';

const router = Router();

import vigorController from '../controllers/VigorController';

router.put('/:id', vigorController.update);
router.post('/', vigorController.store);

export default router;
