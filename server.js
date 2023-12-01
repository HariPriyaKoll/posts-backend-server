// to require the framework
const app = require('fastify')({
    logger: true
 })

 app.register(require('@fastify/cors'), {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
  })
 
 // to declare a single route
 app.get('/api/posts', function (req, reply) {
    const posts = [
        { id: 1, title: 'Post One', body: 'This is post one' },
        { id: 2, title: 'Post Two', body: 'This is post two' },
        { id: 3, title: 'Post Three', body: 'This is post three' }, // you can add as many as you want
      ];
    reply.send(posts)
 })
 
 // Run the server!
 app.listen({ port: 3000 }, (err, address) => {
    if (err) {
       app.log.error(err)
       process.exit(1)
    }
    app.log.info(`The server is listening on ${address}`)
 })
