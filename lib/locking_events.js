/**
 * Event for locking
 * @namespace LockingEvents
 */

'use strict'

/** A lock allocated  */
exports.ALLOC = 'sg:lock:alloc'
/** A lock released */
exports.RELEASE = 'sg:lock:release'
/** Require locking */
exports.LOCK = 'sg:lock:lock'
/** Require unlocking */
exports.UNLOCK = 'sg:lock:unlock'
