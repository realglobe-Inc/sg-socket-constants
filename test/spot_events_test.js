/**
 * Test case for spotEvents.
 * Runs with mocha.
 */
'use strict'

const SpotEvents = require('../lib/spot_events.js')
const assert = require('assert')
const co = require('co')

describe('spot-events', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Spot events', () => co(function * () {
    for (let name of Object.keys(SpotEvents)) {
      assert.ok(SpotEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
