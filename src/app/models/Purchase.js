const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const PurchaseSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

PurchaseSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', PurchaseSchema)
