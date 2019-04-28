require("dotenv").config({ path: "variables.env" });
require("./helpers/passport-goolge-setup");
const http = require("http"),
	app = require("./app"),
	PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT, () => console.log(`server is listening at port ${PORT}`));
