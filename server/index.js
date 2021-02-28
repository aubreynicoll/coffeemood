const http = require('http')
const { PORT } = require('./utils/config')

const app = require('./app')

const server = http.createServer(app)

server.listen(PORT || 3001, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on ${PORT}`)
})
