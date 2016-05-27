/**
 * Test case for lockingEvents.
 * Runs with mocha.
 */
'use strict'

const LockingEvents = require('../lib/locking_events.js')
const assert = require('assert')
const co = require('co')

describe('locking-events', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Locking events', () => co(function * () {
    for (let name of Object.keys(LockingEvents)) {
      assert.ok(LockingEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
