/**
 * Events for remote control
 * @namespace RemoteEvents
 */

'use strict'

// -- Spot -> Cloud

/** Define interfaces */
exports.INTERFACE = 'sg:remote:interface'

// -- Terminal -> Cloud

/** Join to remote end point */
exports.JOIN = 'sg:remote.join'
/** Leave from remote end point */
exports.LEAVE = 'sg:remote.leave'
/** Preform an action */
exports.ACTION = 'sg:remote.action'