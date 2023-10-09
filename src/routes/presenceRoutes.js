import { Router } from 'express';

const router = Router();

import presenceController from '../controllers/PresenceController';

router.put('/:id', presenceController.update);
router.post('/', presenceController.store);

export default router;
