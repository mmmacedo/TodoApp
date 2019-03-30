const restful = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true}, //descricao da tarefa
    done: { type: Boolean, required: true, default: false}, // tarefa concluida
   createdAt: { type: Date, default: Date.now } //data em q foi criado o registro
});

module.exports = restful.mondel('Todo', todoSchema);
