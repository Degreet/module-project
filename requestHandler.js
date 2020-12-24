const fs = require("fs")
const buildPath = require("./modules/buildPath.js")

module.exports = function (req, resp) {
  fs.createReadStream(buildPath("index.html")).pipe(resp)
}