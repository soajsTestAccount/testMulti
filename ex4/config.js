'use strict';

module.exports = {
    serviceName: 'EX44',
    serviceGroup: 'Test Group',
    servicePort: 5580,
    extKeyRequired: false,
    awareness: false,
    requestTimeout: 30,
    requestTimeoutRenewal: 5,
    type: 'daemon',
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