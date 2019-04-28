module.exports = {
	checkAuth(req, res, next) {
		if (!req.user) {
			return res.status(401).json({
				err: "you must login"
			});
		}
		next();
	}
};
