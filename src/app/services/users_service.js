'use strict';

// import pgdb from '../../connections/postgresql';

/**
 * Custom error throwed by Request Companies service
 *
 * @class ErrorServiceUsers
 * @extends {Error}
 */
class ErrorServiceUsers extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        this.code = 401;
    }
}

const User = require('../../server/models/user');

class UsersService {

    async getAllUsers(req = request, res = response) {
        const { limit = 5, size = 0 } = req.query;
        const query = { status: true };

        const [ total, users ] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip( Number( size ) )
                .limit(Number( limit ))
        ]);

        return {
            total,
            users
        };
    }

    async getUser(uid, req = request, res = response) {

        const [ user ] = await Promise.all([
            User.findById(uid)
        ]);

        return {
            user
        };
    }

    async updateUser(uid, req = request, res = response) {
        const { email, last_name, name } = req.body;

        const product = await User.findByIdAndUpdate(uid, { email, last_name, name } , { new: true });

        return product
    }
}

const instance = new UsersService();

export {
    instance as
    default,
    ErrorServiceUsers
}