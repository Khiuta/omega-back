import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import presenceController from '../controllers/PresenceController';

router.get('/:id', loginRequired, presenceController.index);
router.put('/:id', loginRequired, presenceController.update);
router.post('/', loginRequired, presenceController.store);

export default router;
