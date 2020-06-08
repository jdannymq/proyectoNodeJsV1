const http = require('http');
var colors = require('colors');
var url = require('url');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.month + " " + q.year;

    //res.write(req.url);
    //res.write('<h1> hola mundo construyendo con node js</h1>');
    res.end(txt);
}

const server = http.createServer(handleServer);

server.listen(3000,function(){
    console.log('servidor esta escuchando en puerto 3000'.green);
})