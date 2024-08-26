'use strict';

/**************************************************************************************************
 * Connect to postgres using pgpromise, it export a promise to handle the connected and error event *
 *                                                                                                *
 * @author FM <fercho.morales420@gmail.com>                                                   *
 **************************************************************************************************/

import config from './../config';
import Promise from 'bluebird';

var options = {
    // Initialization Options
    promiseLib: Promise
};

const pgp = require('pg-promise')(options);
const connectionString = config.connections.postgres.url;
const db = pgp(connectionString);

export { db as default };