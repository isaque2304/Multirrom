module.exports = function(app){
    app.get('/participantes', function(req,res){
    app.app.controllers.participantes.participantes(app,req,res)
    })
}