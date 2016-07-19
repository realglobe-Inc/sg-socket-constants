/**
 * Events for remote control
 * @namespace RemoteEvents
 */

'use strict'

// --- Actor -> Cloud ---

/** Tell spec */
exports.SPEC = 'sg:remote:spec'

// --- Caller -> Cloud ---

/** Join to remote end point */
exports.JOIN = 'sg:remote:join'
/** Leave from remote end point */
exports.LEAVE = 'sg:remote:leave'
/** Perform an action */
exports.PERFORM = 'sg:remote:perform'

// --- Actor <-> Cloud <-> Caller ---
exports.PIPE = 'sg:remote:pipe'
