const restful = require('node-restful')
const mongoose = restful.mongoose

const examSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    local: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    created: { type: Date, default: Date.now }
})

module.exports = restful.model('Exam', examSchema)
