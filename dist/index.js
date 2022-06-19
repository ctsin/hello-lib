
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hello-lib.cjs.production.min.js')
} else {
  module.exports = require('./hello-lib.cjs.development.js')
}
