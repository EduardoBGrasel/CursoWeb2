const schedule = require('node-schedule')

const tarefa1 = schedule.rescheduleJob('*/5 * 12 * 2', function () {
    console.log('testando')
})