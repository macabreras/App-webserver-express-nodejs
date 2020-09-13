const http = require('http');
http.createServer( ( req, res) => {

    res.writeHead(200, { 'Content-Type': 'aplication/jason' });

    let salida = {
        name: 'Miguel Cabrera',
        hobby: 'Runner and Fitness',
        years: 35,
        url : req.url
    }

    res.write(JSON.stringify( salida ));
    res.end();
} ) 
.listen(8080);
console.log('Escuchando puerto 8080');
