/**
 * Events for remote control
 * @namespace RemoteEvents
 */

'use strict'

// -- Spot -> Cloud

/** Notice spec */
exports.SPEC = 'sg:remote:spec'
/** Downwards event */
exports.DOWN = 'sg:remote.down'

// -- Terminal -> Cloud

/** Join to remote end point */
exports.JOIN = 'sg:remote.join'
/** Leave from remote end point */
exports.LEAVE = 'sg:remote.leave'
/** Trigger an action */
exports.FIRE = 'sg:remote.fire'
/** Upwards event */
exports.UP = 'sg:remote.up'

