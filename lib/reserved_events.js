/**
 * Events reserved by Socket.IO
 * @namespace ReservedEvents
 * @see http://socket.io/docs/server-api/
 * @see http://socket.io/docs/client-api/
 */

'use strict'

/** New connection established */
exports.CONNECTION = 'connection'

/** Connected to server */
exports.CONNECT = 'connect'
/** Failed  to connected to server */
exports.CONNECT_ERROR = 'connect_error'
/** Connected timeout occuor */
exports.CONNECT_TIMEOUT = 'connect_timeout'
/** Disconnected from server */
exports.DISCONNECT = 'disconnect'

/** Error */
exports.ERROR = 'error'
