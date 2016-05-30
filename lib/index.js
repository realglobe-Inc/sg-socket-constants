/**
 * Constants variables for socket
 * @module sg-socket-constants
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get LockingEvents () { return d(require('./locking_events')) },
  get ReservedEvents () { return d(require('./reserved_events')) },
  get SpotEvents () { return d(require('./spot_events')) }
}
