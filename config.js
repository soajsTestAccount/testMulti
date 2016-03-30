'use strict';

module.exports = {
    type: 'multi',
    multi: [
        {
            config: 'ex1/config.js',
            main: 'ex1/index.js'
        },
        {
            config: 'ex2/config.js',
            main: 'ex2/run.js'
        },
        {
            config: 'ex3/config.js',
            main: 'ex3/app.js'
        },
        {
            config: 'ex4/config.js'
        }
    ]
};