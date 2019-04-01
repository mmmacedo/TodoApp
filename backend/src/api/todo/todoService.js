const Todo = require('./todo');

Todo.methods(['get', 'post', 'put','delete']);
Todo.updateOptions({ new: true, runValidators: true}); //retorna os valores atualizdos no update
/* API rest
* get: buscar todos elementos, se usar ID, pega pelo ID
* post: realizar insert
* put: update
* delete: remove
* */
module.exports = Todo;