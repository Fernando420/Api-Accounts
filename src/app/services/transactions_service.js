'use strict';

// import pgdb from '../../connections/postgresql';

/**
 * Custom error throwed by Request Companies service
 *
 * @class ErrorServiceTransactions
 * @extends {Error}
 */
class ErrorServiceTransactions extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        this.code = 401;
    }
}

const Account = require('../../server/models/account');
const Transaction = require('../../server/models/transaction');

class TransactionsService {

    async create_trx(req = request, res = response) {
      const { amount, account_id, description } = req.body
      const { user } = req

      const [ account ] = await Promise.all([
        Account.findById(account_id)
      ]);

      const [ user_account ] = await Promise.all([
        Account.find({user: user._id})
      ]);

      const [ account_user ] = await Promise.all([
        Account.findById(user_account[0]._id)
      ]);

      if ( !account ) return { msg: 'Cuenta de envio no existe' };
      if ( account_user.balance < amount ) return { msg: 'Sin saldo suficiente' };

      let balance = account.balance + amount;
      let total = account.total + amount;

      const accountUPD = await Account.findByIdAndUpdate(account_id, { balance, total } , { new: true });

      const transaction = new Transaction({ amount, description, receiveAccount: accountUPD, sendAccount: account_user, typeTrx: 'DEPOSIT' });

      transaction.save()

      balance = account_user.balance - amount;
      const userAccountUPD = await Account.findByIdAndUpdate(account_user._id, { balance } , { new: true });

      let transaction_user = new Transaction({ amount, description, receiveAccount: accountUPD, sendAccount: userAccountUPD, typeTrx: 'WITHDRAWAL' });

      transaction_user.save()

      return { transaction }

    }

    async create_deposit(req = request, res = response) {
      const { amount, account_id, description } = req.body
      const { user } = req

      const [ account ] = await Promise.all([
        Account.findById(account_id)
      ]);

      if ( !account ) return { msg: 'Cuenta de envio no existe' };
      
      let balance = amount + account.balance;
      let total = amount + account.total;

      const accountUPD = await Account.findByIdAndUpdate(account_id, { balance, total } , { new: true });

      const transaction = new Transaction({ amount, description, receiveAccount: account, typeTrx: 'DEPOSIT' });
      // Guardar en BD
      await transaction.save();

      return transaction;
    }

    async create_withdrawal(req = request, res = response) {
        const { amount, account_id, description } = req.body
        const { user } = req
  
        const [ account ] = await Promise.all([
          Account.findById(account_id)
        ]);
  
        if ( !account ) return { msg: 'Cuenta de envio no existe' };
        if ( account.balance < amount ) return { msg: 'Sin saldo suficiente' };
        
        let balance = amount - account.balance;
  
        const accountUPD = await Account.findByIdAndUpdate(account_id, { balance } , { new: true });
  
        const transaction = new Transaction({ amount, description, receiveAccount: account, typeTrx: 'WITHDRAWAL' });
        // Guardar en BD
        await transaction.save();

        return transaction;
    }
}

const instance = new TransactionsService();

export {
    instance as
    default,
    ErrorServiceTransactions
}