'use strict';

// import pgdb from '../../connections/postgresql';
const User = require('../../server/models/user');
const Account = require('../../server/models/account');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
/**
 * Custom error throwed by Request Companies service
 *
 * @class ErrorServiceAuth
 * @extends {Error}
 */
class ErrorServiceAuth extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        this.code = 401;
    }
}

class AuthService {

    async login(req, res, next) {
        const { email, password } = req.body;

        try {
            // Verificar si el email existe
            const user = await User.findOne({ email });
            console.log("user", user)
            if ( !user ) {
                return {
                    msg: 'User / Password no son correctos - correo'
                };
            }
    
            // SI el User está activo
            if ( !user.status ) {
                return {
                    msg: 'User / Password no son correctos - estado: false'
                };
            }
    
            // Verificar la contraseña
            const validPassword = bcryptjs.compareSync( password, user.password );
            if ( !validPassword ) {
                return {
                    msg: 'User / Password no son correctos - password'
                };
            }
    
            // Generar el JWT
            const token = await generateJWT( user.id );

            return {
                user,
                token
            }
    
        } catch (error) {
            console.log(error)
            return {
                msg: 'Hable con el administrador'
            };
        }   
    }

    async register(req, res, next) {
        const { name, last_name, email, password } = req.body;

        try {
            const user = new User({ name, last_name, email, password });

            // Encriptar la contraseña
            const salt = bcryptjs.genSaltSync();
            user.password = bcryptjs.hashSync( password, salt );

            // Guardar en BD
            await user.save();

            const account = new Account({ balance: 0, user });

            await account.save();

            return {
                user,
                account
            };
    
        } catch (error) {
            console.log(error)
            return {
                msg: 'Hable con el administrador'
            };
        }   
    }
}

const instance = new AuthService();

export {
    instance as
    default,
    ErrorServiceAuth
}