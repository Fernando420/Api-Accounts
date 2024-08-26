
const { Schema, model } = require('mongoose');

const AccountSchema = Schema({
    name: {
        type: String,
        default: "Cuenta Nueva"
    },
    description: {
        type: String,
        default: "Cuenta Nueva"
    },
    balance: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
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

AccountSchema.methods.toJSON = function() {
    const { __v, password, _id, ...account  } = this.toObject();
    account.uid = _id;
    return account;
}

module.exports = model( 'Account', AccountSchema );
