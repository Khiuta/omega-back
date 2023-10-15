import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import attackController from '../controllers/AttackController';

router.get('/:id', loginRequired, attackController.index);
router.post('/', loginRequired, attackController.store);
router.put('/:id', loginRequired, attackController.update);

export default router;
