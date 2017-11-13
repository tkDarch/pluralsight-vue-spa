const base = require('./webpack.base.config.js')

let config = Object.assign({}, base, {})

// No need for App Entry during tests
delete config.entry

module.exports = config
