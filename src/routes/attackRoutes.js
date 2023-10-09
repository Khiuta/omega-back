import { Router } from 'express';

const router = Router();

import attackController from '../controllers/AttackController';

router.get('/', attackController.index);
router.post('/', attackController.store);
router.put('/:id', attackController.update);

export default router;
