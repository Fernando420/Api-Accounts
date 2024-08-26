'use stric';

import { default as handler, methods } from '../controllers/auth_controller';
import { Router } from 'express';

const router = Router();

router.post('/login', handler[methods.LOGIN]);
router.post('/register', handler[methods.REGISTER]);

export default router;