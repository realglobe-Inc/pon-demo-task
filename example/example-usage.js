'use strict'

const pon = require('pon')
const ponDemoTask = require('pon-demo-task')

async function tryExample () {
  let run = pon({
    myTask01: ponDemoTask()
  })

  run('myTask01')
}

tryExample()
