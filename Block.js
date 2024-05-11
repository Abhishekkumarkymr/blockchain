Block.js

const mongoose = require('mongoose');

const BlockSchema = new mongoose.Schema({
  index: { type: Number, required: true },
  transactions: { type: Array, required: true },
  timestamp: { type: Date, default: Date.now },
  hash: { type: String, required: true },
  previousHash: { type: String, required: true },
});

const Block = mongoose.model('Block', BlockSchema);

module.exports = Block;
