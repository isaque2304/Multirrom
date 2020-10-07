// importando as config do server
const app = require('./config/server');

// parametrizar a porta de escuta
var server = app.listen(80, function(){
    console.log('Servidor online')
})

var io = require('socket.io').listen(server);

//Crirar variável global com a função set do express
app.set('io', io);
//criar a conexão por websocket
io.on('connection', function(socket){
    console.log('Usuário conectou')

    socket.on('disconnect', function(){
        console.log("Usuário desconectou")
    });

    //dialogos de conversa
    socket.on('msgParaServidor', function(data){
        socket.emit(
            'msgParaCliente',
        {apelido: data.apelido, mensagem: data.mensagem})

        socket.broadcast.emit(
            'msgParaCliente',
        {apelido: data.apelido, mensagem: data.mensagem})

         //participantes
         socket.emit(
             'participantesParaCliente',
        {apelido: data.apelido})

        socket.broadcast.emit(
            'participantesParaCliente',
        {apelido: data.apelido})
    });
});