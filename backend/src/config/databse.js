const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo',  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
});

