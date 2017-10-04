/**
 * Demo of pon task
 * @module pon-demo-task
 * @version 3.0.2
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
