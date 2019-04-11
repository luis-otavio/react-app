const Exam = require('./exam')

Exam.methods(['get', 'post', 'put', 'delete'])
Exam.updateOptions({new: true, runValidators: true})

module.exports = Exam