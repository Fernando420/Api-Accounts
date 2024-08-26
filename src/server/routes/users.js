'use stric';

import { default as handler, methods } from './../controllers/users_controller';
import { Router } from 'express';
import { validToken } from '../middlewares/authentication';

const router = Router();

router.get('/users', validToken, handler[methods.ALL_USERS]);
router.get('/user/:id', validToken, handler[methods.SHOW_USER]);
router.put('/user/:id', validToken, handler[methods.UPDATE_USER]);

export default router;