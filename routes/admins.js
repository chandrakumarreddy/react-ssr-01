const express = require("express");
const router = express.Router();
const { checkAuth } = require("../helpers/auth");

router.route("/").get(checkAuth, (req, res, next) => {
	res.json([
		{ id: 1, name: "Admin1", age: 20 },
		{ id: 2, name: "Admin2", age: 21 },
		{ id: 3, name: "Admin3", age: 22 },
		{ id: 4, name: "Admin4", age: 24 },
		{ id: 5, name: "Admin5", age: 25 }
	]);
});

module.exports = router;
