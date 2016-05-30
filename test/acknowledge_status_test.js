/**
 * Test case for acknowledgeStatus.
 * Runs with mocha.
 */
'use strict'

const AcknowledgeStatus = require('../lib/acknowledge_status.js')
const assert = require('assert')
const co = require('co')

describe('acknowledge-status', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Acknowledge status', () => co(function * () {
    for (let name of Object.keys(AcknowledgeStatus)) {
      assert.ok(AcknowledgeStatus[ name ])
    }
  }))
})

/* global describe, before, after, it */
