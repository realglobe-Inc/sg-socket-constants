'use strict'

const {
  buildinEvents
} = require('sg-socket-constants')

const sgSocketClient = require('sg-socket-client')

let socket = sgSocketClient('http://localhost:8004')
socket.emit(buildinEvents.LOCK, { by: 'me' })
