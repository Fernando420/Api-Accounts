'use strict';

export default {
    massPayments: {
        name: process.env.MS_NAME || 'Api-Accounts',
        pathLogger: process.env.PATH_LOGGER || './logs',
        fileLogger: process.env.FILE_LOGGER || 'application.log',
        excludeLogger: process.env.EXCLUDE_LOGGER || 'ping'
    },
    apiStp: {
        service: process.env.URL_API_STP_ACTUALIZA || 'https://demo.stpmex.com:7024/speidemo/webservices/SpeiActualizaServices?wsdl',
        consult: process.env.URL_API_STP_CONSULT || 'https://demo.stpmex.com:7024/speidemo/webservices/SpeiConsultaServices?wsdl',
        private_key_file: process.env.PEM_AUTHENTICATION || "./misc/prueba-key.pem",
        private_password: process.env.PASSWORD_AUTHENTICATION || "12345678"
    }
};