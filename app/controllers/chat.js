module.exports.iniciaChat = function(app,req,res){
var dadosForm = req.body;

req.assert('apelido', 'Apelido não pode ser vazio').notEmpty();
req.assert('apelido', 'Apelido deve conter entre 3 á 15 caracteres').len(3, 15);

var erros = req.validationErrors();

if(erros){
    res.render('index', {validacao : erros})
    return;
}


app.get('io').emit(
    'msgParaCliente',
    {apelido: dadosForm.apelido, mensagem : 'Acabou de entrar no chat'}
)

res.render('chat', {dadosForm: dadosForm});
}
