/**
 * Test case for greetingEvents.
 * Runs with mocha.
 */
'use strict'

const GreetingEvents = require('../lib/greeting_events.js')
const assert = require('assert')
const co = require('co')

describe('greeting-events', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Greeting events', () => co(function * () {
    for (let name of Object.keys(GreetingEvents)) {
      assert.ok(GreetingEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
