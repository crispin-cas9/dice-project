let mongoose = require('mongoose')
let validator = require('validator')

let itemSchema = new mongoose.Schema({
  dice: Array,
  set: Number
})

module.exports = mongoose.model('Item', itemSchema)
