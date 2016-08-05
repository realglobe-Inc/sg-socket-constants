/**
 * Events for subscribing
 * @namespace SubscribingEvents
 * @deprecated
 */

'use strict'

// -- publisher -> cloud

/**
 * @deprecated
 * Ready to accept subscribes
 */
exports.RAISE = 'sg:pubsub:raise'
/**
 * @deprecated
 * No longer accepts subscribes
 */
exports.SHUT = 'sg:pubsub:shut'
/**
 * @deprecated
 * Publish event
 */
exports.PUBLISH = 'sg:pubsub:publish'

// -- cloud -> publisher

/**
 * @deprecated
 * Number of subscribers
 */
exports.COUNT = 'sg:pubsub:count'

// -- subscriber -> cloud

/**
 * @deprecated
 * Start subscribing
 */
exports.SUBSCRIBE = 'sg:pubsub:subscribe'
/**
 * @deprecated
 * Stop subscribing
 */
exports.UNSUBSCRIBE = 'sg:pubsub:unsubscribe'

// -- cloud -> subscriber

/**
 * @deprecated
 * Receive published event
 */
exports.RECEIVE = 'sg:pubsub:receive'
