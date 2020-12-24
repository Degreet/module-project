const buildPath = url => `${process.cwd()}/public/${url}`
const fs = require("fs"), fsp = fs.promises

module.exports = async function fileReader(url) {
  const path = buildPath(url)
  const buffer = await fsp.readFile(path).catch(() => "not found")
  const text = buffer.toString()
  return text
}