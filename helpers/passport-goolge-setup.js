const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	done(null, id);
});

passport.use(
	new Strategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: process.env.callbackURL
		},
		function(accessToken, refreshToken, profile, cb) {
			return cb(null, profile);
		}
	)
);
