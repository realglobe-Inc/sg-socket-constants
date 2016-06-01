/**
 * Event for locking
 * @namespace LockingEvents
 */

'use strict'

// -- Cloud -> Edge

/** A lock allocated  */
exports.ALLOC = 'sg:lock:alloc'
/** A lock released */
exports.RELEASE = 'sg:lock:release'

// -- Edge -> Cloud

/** Require locking */
exports.LOCK = 'sg:lock:lock'
/** Require unlocking */
exports.UNLOCK = 'sg:lock:unlock'
