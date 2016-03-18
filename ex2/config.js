'use strict';

module.exports = {
    serviceName: 'EX2',
    serviceGroup: 'Test Group',
    servicePort: 5577,
    extKeyRequired: false,
    awareness: false,
    requestTimeout: 30,
    requestTimeoutRenewal: 5,
    type: 'service',
    multi: ['ex1/config.js', 'ex2/config.js', 'ex3/config.js', 'ex4/config.js'],
    main: 'index.js'
};