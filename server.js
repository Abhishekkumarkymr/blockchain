server.js

const express = require('express');
const app = express();
const port = 5000;
const blockchain = [];
let transactionPool = [];

app.use(express.json());

// Function to create a new transaction
app.post('/transactions/new', (req, res) => {
  const { sender, recipient, amount } = req.body;
  const newTransaction = { sender, recipient, amount };
  transactionPool.push(newTransaction);
  res.json({ message: 'Transaction created successfully!' });
});

// Function to mine a new block
app.get('/mine', (req, res) => {
  const lastBlock = blockchain[blockchain.length - 1];
  const newBlock = {
    index: lastBlock.index + 1,
    transactions: transactionPool,
    timestamp: Date.now(),
    hash: cryptoHash(transactionPool, lastBlock.hash),
  };
  blockchain.push(newBlock);
  transactionPool = [];
  res.json({ message: 'Block mined successfully!' });
});

// Function to retrieve the blockchain
app.get('/chain', (req, res) => {
  res.json(blockchain);
});

// Function to retrieve the transaction pool
app.get('/transactions/pool', (req, res) => {
  res.json(transactionPool);
});

// Function to create a hash for a block
function cryptoHash(transactions, previousHash) {
  const transactionString = transactions.map((transaction) => {
    return `${transaction.sender}``${transaction.recipient}``${transaction.amount}`;
  }).join('');
  const hash = crypto.createHash('sha256');
  hash.update(`${transactionString}${previousHash}`);
  return hash.digest('hex');
}

app.listen(port, () => {
  console.log(Server` listening on port ${port}`);
});
