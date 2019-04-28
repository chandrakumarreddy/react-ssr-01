const express = require("express"),
	session = require("express-session"),
	passport = require("passport"),
	app = express(),
	usersRouter = require("./routes/users"),
	adminsRouter = require("./routes/admins"),
	googleRouter = require("./routes/google-auth");

app.set("view engine", "ejs");
app.use(express.json());
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);
app.use("/admins", adminsRouter);
app.use("/auth/google", googleRouter);

app.get("/", (req, res) => {
	return res.render("index");
});

app.use((req, res, next) => {
	const error = new Error("not found");
	error.status = 500;
	next(error);
});
app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		error: err.message
	});
});

module.exports = app;
