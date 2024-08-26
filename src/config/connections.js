'use strict';

export default {
    postgres: {
        url: process.env.DATABASE_URL || 'postgres://localhost:5432/api_accounts',
        urlRep: process.env.DATABASE_URL_REP || 'postgres://localhost:5432/api_accounts',
    },
    mongo: {
        url: process.env.MONGODB_CNN || 'mongodb+srv://ferchomorales420:P7MFNbyz6dYrPG6w@cluster0.fe4nw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    }
};