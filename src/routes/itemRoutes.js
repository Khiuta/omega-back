import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import itemController from '../controllers/ItemController';

router.get('/:id', loginRequired, itemController.index);
router.post('/', loginRequired, itemController.store);
router.put('/:id', loginRequired, itemController.update);

export default router;
