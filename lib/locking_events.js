/**
 * Event for locking
 * @namespace LockingEvents
 */

'use strict'
/** A lock allocated  */
exports.ALLOC = 'sg:lock:alloc'
/** A lock released */
exports.RELEASE = 'sg:lock:release'
/** Lock conflicted */
exports.CONFLICT = 'sg:lock:conflict'
/** Require locking */
exports.LOCK = 'sg:lock:lock'
/** Require unlocking */
exports.UNLOCK = 'sg:lock:unlock'
