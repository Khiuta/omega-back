import { Router } from 'express';

const router = Router();

import characterController from '../controllers/CharacterController';

router.get('/', characterController.index);
router.post('/', characterController.store);

export default router;
