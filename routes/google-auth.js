const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get("/redirect", passport.authenticate("google"), function(req, res) {
	res.redirect("/");
});

module.exports = router;
