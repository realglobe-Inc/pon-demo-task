/**
 * Demo of pon task
 * @module pon-demo-task
 * @version 3.0.6
 */

'use strict'

const define = require('./define')

const lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
