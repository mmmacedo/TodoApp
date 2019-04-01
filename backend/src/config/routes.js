const Express = require('express');

module.exports = function (server) {
    //API routes
    const router = Express.Router();
    server.use('/api', router);

    //TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos')

}