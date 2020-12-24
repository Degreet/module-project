const { createServer } = require("http")
const requestHandler = require("./requestHandler.js")
const server = createServer(requestHandler)
server.listen(process.env.PORT || 3000)