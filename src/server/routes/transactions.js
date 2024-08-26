'use stric';

import { default as handler, methods } from './../controllers/transactions_controller';
import { Router } from 'express';
import { validToken } from '../middlewares/authentication';

const router = Router();

router.put('/transactions/create', validToken, handler[methods.CREATE_TRX]);
router.put('/transactions/deposit', validToken, handler[methods.CREATE_DEPOSIT]);
router.put('/transactions/withdrawal', validToken, handler[methods.CREATE_WITHDRAWAL]);

export default router;