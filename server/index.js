const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('ok')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})