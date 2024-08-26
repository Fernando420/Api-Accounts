'use strict';

import AuthService from '../../app/services/auth_service';
export const methods = {
    LOGIN: 'login',
    REGISTER: 'register'
};

/**
 * Handler methods
 *
 * @type {Object}
*/

export default {
    [methods.LOGIN]: async (req, res, next) => {
        const { map } = req;
        return await AuthService.login(req, res, next)
            .then(resp => {
                if(resp.user){
                    res.io({
                        code: 200,
                        message: 'success.login',
                        data: {
                            data: resp
                        }
                    });
                }else{
                    res.io({
                        code: 401,
                        message: resp
                    });
                }
            })
            .catch(err => {
                res.io({
                    code: err.code,
                    message: err.message
                });
            });
    },
    [methods.REGISTER]: async (req, res, next) => {
        const { map } = req;
        return await AuthService.register(req, res, next)
            .then(resp => {
                if(resp.user){
                    res.io({
                        code: 200,
                        message: 'success.register',
                        data: {
                            data: resp
                        }
                    });
                }else{
                    res.io({
                        code: 400,
                        message: resp
                    });
                }
            })
            .catch(err => {
                res.io({
                    code: err.code,
                    message: err.message
                });
            });
    }
};