const express = require("express");
const router = express.Router();

router.route("/").get((req, res, next) => {
	res.json([
		{ id: 1, name: "Johnson", age: 20 },
		{ id: 2, name: "kedar", age: 21 },
		{ id: 3, name: "Jadav", age: 22 },
		{ id: 4, name: "Bumrah", age: 24 },
		{ id: 5, name: "Grider", age: 25 }
	]);
});

module.exports = router;
