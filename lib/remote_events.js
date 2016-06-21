/**
 * Events for remote control
 * @namespace RemoteEvents
 */

'use strict'

// --- Spot -> Cloud ---

/** Tell spec */
exports.SPEC = 'sg:remote:spec'
/** Downwards event */
exports.DOWN = 'sg:remote:down'

// --- Terminal -> Cloud ---

/** Join to remote end point */
exports.JOIN = 'sg:remote:join'
/** Leave from remote end point */
exports.LEAVE = 'sg:remote:leave'
/** Perform an action */
exports.PERFORM = 'sg:remote:preform'

// --- Spot <-> Cloud <-> Terminal ---
exports.PIPE = 'sg:remote:pipe'


