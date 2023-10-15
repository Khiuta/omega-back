import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import strengthController from '../controllers/StrengthController';

router.get('/:id', loginRequired, strengthController.index);
router.post('/', loginRequired, strengthController.store);
router.put('/:id', loginRequired, strengthController.update);

export default router;
