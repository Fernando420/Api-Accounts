'use strict';


export default {

    /**
     * Default service configuration
     *
     * @type {Object}
     */
    baseUrl: process.env.BASE_URL || 'http://localhost:4000/#/',
    port: process.env.PORT || '4000',
    host: process.env.HOST || '0.0.0.0',
    seed: process.env.SEED || 'api-accounts-development'
};