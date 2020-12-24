const { createServer } = require("http")
let reqHandler = (_, resp) => resp.end("I can't")

module.exports = {
  setup(reader) {
    reqHandler = async (req, resp) => {
      const text = await reader(req.url == "/" ? "index.html" : req.url)
      resp.end(text)
    }
  },
  
  run(port) {
    const server = createServer(reqHandler)
    server.listen(port)
  }
}