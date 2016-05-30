/**
 * Test case for reservedEvents.
 * Runs with mocha.
 */
'use strict'

const ReservedEvents = require('../lib/reserved_events.js')
const assert = require('assert')
const co = require('co')

describe('reserved-events', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Reserved events', () => co(function * () {
    for (let name of Object.keys(ReservedEvents)) {
      assert.ok(ReservedEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
