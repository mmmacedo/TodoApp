//Middleware
module.exports = function(req, res, next) {
    //Permite requisicoes de outras aplicacoes
    res.header('Access-Control-Allow-Origin', '*')
    //Define os métodos disponibilizados
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //Define os cabecalhos disponibilizados
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}