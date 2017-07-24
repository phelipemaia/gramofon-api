'use strict'

module.exports = {
    name: 'gramofon-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    db: {
        uri: 'mongodb://root:Nunc4Violara@ds027165.mlab.com:27165/gramofon',
    }
}