/**
 * Test case for remoteEvents.
 * Runs with mocha.
 */
'use strict'

const RemoteEvents = require('../lib/remote_events.js')
const assert = require('assert')
const co = require('co')

describe('remote-events', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Remote events', () => co(function * () {
    for (let name of Object.keys(RemoteEvents)) {
      assert.ok(RemoteEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
