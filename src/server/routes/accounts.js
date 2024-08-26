'use stric';

import { default as handler, methods } from './../controllers/accounts_controller';
import { Router } from 'express';
import { validToken } from '../middlewares/authentication';

const router = Router();

router.get('/accounts', validToken, handler[methods.ALL_ACCOUNTS]);
router.get('/account/:id', validToken, handler[methods.SHOW_ACCOUNT]);
router.get('/account/:id/transactions', validToken, handler[methods.SHOW_ACCOUNT_TRANSACTIONS]);
router.put('/account/:id', validToken, handler[methods.UPDATE_ACCOUNT]);

export default router;