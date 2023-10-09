import { Router } from 'express';

const router = Router();

import strengthController from '../controllers/StrengthController';

router.post('/', strengthController.store);
router.put('/:id', strengthController.update);

export default router;
