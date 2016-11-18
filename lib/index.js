/**
 * Constants variables for socket
 * @module sg-socket-constants
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get AcknowledgeStatus () { return d(require('./acknowledge_status')) },
  get AuthEvents () { return d(require('./auth_events')) },
  get GreetingEvents () { return d(require('./greeting_events')) },
  get LockingEvents () { return d(require('./locking_events')) },
  get ObservingEvents () { return d(require('./observing_events')) },
  get PubsubEvents () { return d(require('./pubsub_events')) },
  get RemoteEvents () { return d(require('./remote_events')) },
  get ReservedEvents () { return d(require('./reserved_events')) }
}
