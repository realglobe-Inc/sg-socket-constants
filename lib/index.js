/**
 * Constants variables for socket
 * @module sg-socket-constants
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get buildinEvents () { return d(require('./buildin_events')) }
}
