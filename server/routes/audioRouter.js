const audioRouter = require('express').Router()
const fs = require('fs')
const path = require('path')

audioRouter.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', '/temp/a.mp3')
  const stat = fs.statSync(filePath)
  const readStream = fs.createReadStream(filePath)

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size,
  })

  readStream.pipe(res)
})

module.exports = audioRouter
