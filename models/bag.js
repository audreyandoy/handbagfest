var mongoose = require("mongoose");

var BagSchema = new mongoose.Schema({
	brand: String,
	type: String,
	category: String,
	price: Number,
	color: String,
	details: String,
	image_url: String
});

module.exports = mongoose.model("Bag", BagSchema);