const jsonServer = require('json-server')
const db = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(process.env.PORT|| 9090, () => {
  console.log('Noteful json-server started at http://localhost:9090')
})
