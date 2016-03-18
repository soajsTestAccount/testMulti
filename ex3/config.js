'use strict';

module.exports = {
    serviceName: 'EX3',
    serviceGroup: 'Test Group',
    servicePort: 5579,
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