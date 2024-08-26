'use strict'
import auth from './routes/auth'
import transactions from './routes/transactions'
import users from './routes/users';
import accounts from './routes/accounts';
import ping from './routes/ping';
import { Router } from 'express';

const router = Router();

/**
 * Route to map:
 *  get: /welcome/
*/

router.use('/api/v1', auth);
router.use('/api/v1', transactions);
router.use('/api/v1', users);
router.use('/api/v1', accounts);
router.use('/api/v1', ping);

export default router;