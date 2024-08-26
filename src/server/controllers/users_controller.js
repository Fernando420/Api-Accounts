'use strict';

import UserService from '../../app/services/users_service';

export const methods = {
    ALL_USERS: 'allUsers',
    SHOW_USER: 'showUser',
    UPDATE_USER: 'updateUser',
};

/**
 * Handler methods
 *
 * @type {Object}
 */
export default {

    [methods.ALL_USERS]: async (req, res, next) => {
        return UserService.getAllUsers(req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.get_users',
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
    [methods.SHOW_USER]: async (req, res, next) => {
        const { id } = req.params
        return UserService.getUser(id, req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.get_users',
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
    [methods.UPDATE_USER]: async (req, res, next) => {
        const { id } = req.params
        return UserService.updateUser(id, req, res, next)
            .then(resp => {
                res.io({
                    code: 200,
                    message: 'success.get_users',
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