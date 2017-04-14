/**
 * Events for remote control
 * @namespace RemoteEvents
 */

'use strict'

// --- Actor -> Hub ---

/** Tell spec */
exports.SPEC = 'sg:remote:spec'
/** Delete spec */
exports.DESPEC = 'sg:remote:despec'

// --- Hub -> Actor ---
/** Force disconnect */
exports.PURGE = 'sg:remote:purge'

// --- Caller -> Hub ---

/** Join to remote end point */
exports.JOIN = 'sg:remote:join'
/** Leave from remote end point */
exports.LEAVE = 'sg:remote:leave'
/** Perform an action */
exports.PERFORM = 'sg:remote:perform'
/** Result of an action */
exports.RESULT = 'sg:remote:result'

// --- Actor <-> Hub <-> Caller ---
exports.PIPE = 'sg:remote:pipe'
