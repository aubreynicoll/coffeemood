const express = require('express')
const cors = require('cors')
const path = require('path')
const audioRouter = require('./routes/audioRouter')

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/audio', audioRouter)

module.exports = app
