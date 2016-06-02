/**
 * Events for subscribing
 * @namespace SubscribingEvents
 */

'use strict'

// -- publisher -> cloud

/** Ready to accept subscribes */
exports.RAISE = 'sg:pubsub:raise'
/** No longer accepts subscribes */
exports.SHUT = 'sg:pubsub:shut'
/** Publish event */
exports.PUBLISH = 'sg:pubsub:publish'

// -- cloud -> publisher

/** Number of subscribers */
exports.COUNT = 'sg:pubsub:count'

// -- subscriber -> cloud

/** Start subscribing */
exports.SUBSCRIBE = 'sg:pubsub:subscribe'
/** Stop subscribing */
exports.UNSUBSCRIBE = 'sg:pubsub:unsubscribe'

// -- cloud -> subscriber

/** Receive published event */
exports.READY = 'sg:pubsub:ready'
exports.RECEIVE = 'sg:pubsub:receive'
exports.GONE = 'sg:pubsub:gone'
