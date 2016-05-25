/**
 * Test case for buildinEvents.
 * Runs with mocha.
 */
'use strict'

const buildinEvents = require('../lib/buildin_events.js')
const assert = require('assert')
const co = require('co')

describe('buildin-events', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Buildin events', () => co(function * () {
    for (let name of Object.keys(buildinEvents)) {
      assert.ok(buildinEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
