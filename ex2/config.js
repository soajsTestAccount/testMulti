'use strict';

module.exports = {
    serviceName: 'EX22',
    serviceGroup: 'Test Group',
    servicePort: 2255,
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
    },
    prerequisites: {
        cpu: '',
        memory: ''
    }
};