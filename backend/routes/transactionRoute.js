const express = require("express");
const router = express.Router();
const { createTransaction } = require("../controller/createTransaction");
const { getTransaction } = require("../controller/getTransaction");
router.post("/createTransaction",createTransaction );
router.get("/getAllTransaction", getTransaction);

module.exports = router;
