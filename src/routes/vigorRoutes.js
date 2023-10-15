import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import vigorController from '../controllers/VigorController';

router.get('/:id', loginRequired, vigorController.index);
router.put('/:id', loginRequired, vigorController.update);
router.post('/', loginRequired, vigorController.store);

export default router;
