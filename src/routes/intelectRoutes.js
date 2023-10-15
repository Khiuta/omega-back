import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import intelectController from '../controllers/IntelectController';

router.get('/:id', loginRequired, intelectController.index);
router.post('/', loginRequired, intelectController.store);
router.put('/:id', loginRequired, intelectController.update);

export default router;
