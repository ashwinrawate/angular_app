const jsonServer = require('json-server');
const middleware = jsonSever.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('../server/data/users');
server.get('/api/users',(req,res,next) => {
    res.status(200).send(userData.getUsers);
});

server.listen(3000, () => {
    console.log('Json server listning on port 3000');
});
