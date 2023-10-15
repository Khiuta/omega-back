import { Router } from 'express';

const router = Router();

import abilityController from '../controllers/AbilityController';

import loginRequired from '../middlewares/loginRequired';

router.get('/:id', loginRequired, abilityController.index);
router.post('/', loginRequired, abilityController.store);
router.put('/:id', loginRequired, abilityController.update);

export default router;
