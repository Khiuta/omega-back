import { Router } from 'express';

const router = Router();

import loginRequired from '../middlewares/loginRequired';

import characterController from '../controllers/CharacterController';

router.get('/', characterController.index);
router.post('/', loginRequired, characterController.store);
router.put('/:id', loginRequired, characterController.update);

export default router;
