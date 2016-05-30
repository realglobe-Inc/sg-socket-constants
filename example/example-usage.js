'use strict'

const {
  LockingEvents
} = require('sg-socket-constants')

const sgSocketClient = require('sg-socket-client')

let socket = sgSocketClient('http://localhost:8004')
socket.emit(LockingEvents.LOCK, {
  name: 'resource01',
  by: 'me'
})
