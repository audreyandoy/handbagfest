var express = require("express");
var Bag = require("../models/bag");
var router = express.Router();

//create a new bag
router.post("/", function(req, res) {
	var bag = new Bag(req.body);
	bag.save(function(err) {
		if (err) return res.status(500).send(err);

		res.send(bag);
	});
});

//edit a specific bag
router.put("/:id", function(req, res) {
	Bag.findById(req.params.id, function(err, bag) {
		if (err || !bag) return res.status(500).send(err);

		if (req.body.brand) bag.brand = req.body.brand;
		if (req.body.type) bag.type = req.body.type;
		if (req.body.category) bag.category = req.body.category;
		if (req.body.price) bag.price = req.body.price;
		if (req.body.color) bag.color = req.body.color;
		if (req.body.details) bag.details = req.body.details;
		if (req.body.image_url) bag.image_url = req.body.image_url;

		bag.save(function(err) {
			if (err) return res.status(500).send(err);

			res.send(bag);
		});
	});
});

//delete a specific bag
router.delete("/:id", function(req, res) {
	Bag.remove({ _id: req.params.id }, function(err) {
		if (err) return res.status(500).send(err);
		res.send({ message: "Bag deleted" });
	})
});

//display all bags
router.get("/", function(req, res) {
	Bag.find(function(err, bags) {
		if (err || !bags) return res.status(500).send(err);
		res.send(bags);
	});
});

//display a specific bag
router.get("/:id", function(req, res) {
	Bag.findById(req.params.id, function(err, bag) {
		if (err || !bag) return res.status(500).send(err);

		res.send(bag);
	});
});

module.exports = router;