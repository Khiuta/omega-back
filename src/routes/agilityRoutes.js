import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import agilityController from '../controllers/AgilityController';

router.get('/:id', loginRequired, agilityController.index);
router.put('/:id', loginRequired, agilityController.update);
router.post('/', loginRequired, agilityController.store);

export default router;
