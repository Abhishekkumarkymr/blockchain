Transaction.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
