const port = process.env.PORT || 3000
const fileReader = require("./modules/file-reader.js")
const server = require("./modules/file-server.js")
server.setup(fileReader)
server.run(port)