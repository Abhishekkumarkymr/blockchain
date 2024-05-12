const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	senderName: {
		type: String,
		required: true,
	},
	receiverName: {
		type: String,
		required: true,
		unique: true,
	},
	productTitle: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
		maxLength: 20,
	},
	deliveryStatus: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
