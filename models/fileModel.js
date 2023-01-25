const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    name: String,
    file: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('fileSchema', fileSchema)