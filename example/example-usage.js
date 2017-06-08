'use strict'

const pon = require('pon')
const ponDemoTask = require('pon-demo-task')

;(async () => {
  let run = pon({
    myTask01: ponDemoTask()
  })

  run('myTask01')
}).catch((err) => console.error(err))
