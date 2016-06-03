/**
 * Events for remote control
 * @namespace RemoteEvents
 */

'use strict'

// -- Spot -> Cloud

/** Notice spec */
exports.SPEC = 'sg:remote:spec'
/** Mimic stdout */
exports.OUT = 'sg:remote.out'
/** Mimic stderr */
exports.ERR = 'sg:remote.err'

// -- Terminal -> Cloud

/** Join to remote end point */
exports.JOIN = 'sg:remote.join'
/** Leave from remote end point */
exports.LEAVE = 'sg:remote.leave'
/** Trigger an action */
exports.FIRE = 'sg:remote.fire'
/** Mimic stdin */
exports.IN = 'sg:remote.in'

