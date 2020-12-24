const fs = require("fs")
const buildPath = require("./modules/build-path.js")

module.exports = function (req, resp) {
  if (req.url == "/")
    fs.createReadStream(buildPath("index.html")).pipe(resp)
  else if (req.url.startsWith("/css/"))
    fs.createReadStream(buildPath(req.url.replace("/"))).pipe(resp)
}