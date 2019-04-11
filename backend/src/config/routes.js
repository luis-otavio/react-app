const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // EXAMS Routes
    const examService = require('../api/exam/examService')
    examService.register(router, '/exams')
}