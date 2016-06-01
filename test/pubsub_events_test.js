/**
 * Test case for pubsubEvents.
 * Runs with mocha.
 */
'use strict'

const PubsubEvents = require('../lib/pubsub_events.js')
const assert = require('assert')
const co = require('co')

describe('pubsub-events', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pubsub events', () => co(function * () {
    for (let name of Object.keys(PubsubEvents)) {
      assert.ok(PubsubEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
