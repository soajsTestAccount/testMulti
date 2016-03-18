'use strict';

module.exports = {
    serviceName: 'EX1',
    serviceGroup: 'Test Group',
    servicePort: 5577,
    extKeyRequired: false,
    awareness: false,
    requestTimeout: 30,
    requestTimeoutRenewal: 5,
    type: 'service',
    multi: null,
    src: {
        owner: 'soajsTestAccount',
        repo: 'testMulti',
        main: '/index.js'
    }
};