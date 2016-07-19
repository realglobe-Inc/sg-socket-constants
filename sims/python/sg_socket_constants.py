# -*- coding: utf-8 -*-

"""Python binding of sg-socket-constants@1.3.5

See https://github.com/realglobe-Inc/sg-socket-constants#readme for more details
"""

class AcknowledgeStatus:
  OK = 'sg:acknowledge:ok'
  NG = 'sg:acknowledge:ng'

class GreetingEvents:
  HI = 'sg:greet:hi'
  BYE = 'sg:greet:bye'

class LockingEvents:
  ALLOC = 'sg:lock:alloc'
  RELEASE = 'sg:lock:release'
  LOCK = 'sg:lock:lock'
  UNLOCK = 'sg:lock:unlock'

class ObservingEvents:
  START = 'sg:remote:start'
  STOP = 'sg:remote:stop'
  CHANGE = 'sg:remote:change'

class PubsubEvents:
  RAISE = 'sg:pubsub:raise'
  SHUT = 'sg:pubsub:shut'
  PUBLISH = 'sg:pubsub:publish'
  COUNT = 'sg:pubsub:count'
  SUBSCRIBE = 'sg:pubsub:subscribe'
  UNSUBSCRIBE = 'sg:pubsub:unsubscribe'
  RECEIVE = 'sg:pubsub:receive'

class RemoteEvents:
  SPEC = 'sg:remote:spec'
  JOIN = 'sg:remote:join'
  LEAVE = 'sg:remote:leave'
  PERFORM = 'sg:remote:preform'
  PIPE = 'sg:remote:pipe'

class ReservedEvents:
  CONNECTION = 'connection'
  CONNECT = 'connect'
  RECONNECT = 'reconnect'
  CONNECT_ERROR = 'connect_error'
  CONNECT_TIMEOUT = 'connect_timeout'
  DISCONNECT = 'disconnect'
  ERROR = 'error'

