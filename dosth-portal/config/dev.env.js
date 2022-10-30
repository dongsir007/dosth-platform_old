'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
    NODE_ENV: '"development"',
    OPEN_PROXY: false // 是否开启代理,重置后需重启vue-cli
}