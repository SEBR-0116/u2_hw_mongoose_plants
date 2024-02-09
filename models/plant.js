const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Plant = new Schema (
    {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
    },
    { timestamps: true }
    )

//this does the work of our models/index.js file
module.exports = mongoose.model('plants', Plant)


