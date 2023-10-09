import { Router } from 'express';

const router = Router();

import abilityController from '../controllers/AbilityController';

router.post('/', abilityController.store);
router.put('/:id', abilityController.update);

export default router;
