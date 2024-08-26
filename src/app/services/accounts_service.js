'use strict';

// import pgdb from '../../connections/postgresql';

/**
 * Custom error throwed by Request Companies service
 *
 * @class ErrorServiceAcounts
 * @extends {Error}
 */
class ErrorServiceAcounts extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        this.code = 401;
    }
}

const Account = require('../../server/models/account');
const Transaction = require('../../server/models/transaction');

class AcountsService {

    async getAllAccounts(req = request, res = response) {
        const { limit = 5, size = 0 } = req.query;
        const query = { status: true };

        const [ total, accounts ] = await Promise.all([
            Account.countDocuments(query),
            Account.find(query)
                .skip( Number( size ) )
                .limit(Number( limit ))
        ]);

        return {
            total,
            accounts
        };
    }

    async getAccount(uid, req = request, res = response) {
        const [ account ] = await Promise.all([
            Account.findById(uid)
        ]);

        return {
            account
        };
    }
    
    async getAccountTransactions(uid, req = request, res = response) {
        const [ account ] = await Promise.all([
            Account.findById(uid)
        ]);

        console.log(account)

        const [ transactionsReceive ] = await Promise.all([
            Transaction.find({ receiveAccount: account._id })
        ]);
        
        const [ transactionsSend ] = await Promise.all([
            Transaction.find({ sendAccount: account._id })
        ]);

        console.log(transactionsReceive)
        console.log(transactionsSend)

        return {
            transactionsReceive,
            transactionsSend
        };
    }

    async updateAccount(uid, req = request, res = response) {
        const { name, description, currency } = req.body;

        const account = await Account.findByIdAndUpdate(uid, { name, description, currency } , { new: true });

        return account
    }
}

const instance = new AcountsService();

export {
    instance as
    default,
    ErrorServiceAcounts
}