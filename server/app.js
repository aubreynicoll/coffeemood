const express = require('express')
const cors = require('cors')
const audioRouter = require('./routes/audioRouter')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('ok')
})

app.use('/api/audio', audioRouter)

module.exports = app
