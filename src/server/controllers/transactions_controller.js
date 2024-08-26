'use strict';

import TransactionsService from '../../app/services/transactions_service';

export const methods = {
    CREATE_TRX: 'create_trx',
    CREATE_DEPOSIT: 'create_deposit',
    CREATE_WITHDRAWAL: 'create_withdrawal'
};

/**
 * Handler methods
 *
 * @type {Object}
 */
export default {

    [methods.CREATE_TRX]: async (req, res, next) => {
        return TransactionsService.create_trx(req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.create',
                    data: {
                        data: resp
                    }
                });
            })
            .catch(err => {
                res.io({
                    code: err.code,
                    message: err.message
                });
            });
    },
    [methods.CREATE_DEPOSIT]: async (req, res, next) => {
        return TransactionsService.create_deposit(req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.create',
                    data: {
                        data: resp
                    }
                });
            })
            .catch(err => {
                res.io({
                    code: err.code,
                    message: err.message
                });
            });
    },
    [methods.CREATE_WITHDRAWAL]: async (req, res, next) => {
        return TransactionsService.create_withdrawal(req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.create',
                    data: {
                        data: resp
                    }
                });
            })
            .catch(err => {
                res.io({
                    code: err.code,
                    message: err.message
                });
            });
    }
};