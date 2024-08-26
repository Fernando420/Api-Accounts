import express    from 'express';
import Promise    from 'bluebird';
import bodyParser from 'body-parser';
import io         from './middlewares/io_middleware';
import trace      from './middlewares/trace_middleware';
import error      from './middlewares/error_middleware';
import routes     from './routes';

const { dbConnection } = require('../connections/mongodb');

// Replace promises with bluebird
global.Promise = Promise;

const app = express();

dbConnection();

app.use(io);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(trace);
app.use(routes);

// 404 Routes
app.use((req, res, next) => res.io({ code: 404 }));

// THIS MANDATORY NEEED TO BE THE LAST MIDDLEWARE
// DON USE MIDDLEWARES AFTER THIS
app.use(error);

export default app;
