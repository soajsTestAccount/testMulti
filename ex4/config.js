'use strict';

module.exports = {
    serviceName: 'EX4',
    serviceGroup: 'Test Group',
    servicePort: 5580,
    extKeyRequired: false,
    awareness: false,
    requestTimeout: 30,
    requestTimeoutRenewal: 5,
    type: 'daemon',
    multi: null,
    main: 'index.js'
};