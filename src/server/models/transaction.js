
const { Schema, model } = require('mongoose');

const TransactionSchema = Schema({
    description: {
        type: String,
        default: "Transaction"
    },
    amount: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    sendAccount: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    receiveAccount: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    typeTrx: {
        type: String,
        required: true,
        emun: ['DEPOSIT', 'WITHDRAWAL']
    },
    status: {
        type: Boolean,
        default: true
    },
    currency: {
        type: String,
        default: 'MXN'
    }
});

TransactionSchema.methods.toJSON = function() {
    const { __v, password, _id, ...transaction  } = this.toObject();
    transaction.uid = _id;
    return transaction;
}

module.exports = model( 'Transaction', TransactionSchema );
