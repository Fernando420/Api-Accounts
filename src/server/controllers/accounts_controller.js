'use strict';

import AccountsService from '../../app/services/accounts_service';

export const methods = {
    ALL_ACCOUNTS: 'allAccounts',
    SHOW_ACCOUNT: 'showAccount',
    UPDATE_ACCOUNT: 'updateAccount',
    SHOW_ACCOUNT_TRANSACTIONS: 'getAccountTransactions'
};

/**
 * Handler methods
 *
 * @type {Object}
 */
export default {

    [methods.ALL_ACCOUNTS]: async (req, res, next) => {
        const { map } = req;
        return AccountsService.getAllAccounts(req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.get_accounts',
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
    [methods.SHOW_ACCOUNT]: async (req, res, next) => {
        const { id } = req.params
        return AccountsService.getAccount(id, req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.get_account',
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
    [methods.UPDATE_ACCOUNT]: async (req, res, next) => {
        const { id } = req.params
        return AccountsService.updateAccount(id, req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.update_account',
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
    [methods.SHOW_ACCOUNT_TRANSACTIONS]: async (req, res, next) => {
        const { id } = req.params
        return AccountsService.getAccountTransactions(id, req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.get_account_transactions',
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