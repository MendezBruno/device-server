const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
var server = require('http').createServer(app);


import { Device } from "./device";
let device = new Device('eSolar', '8080');


app.set('portChat',process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(app.get('portChat'), () => {
	console.log('server on port ', app.get('portChat'));
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Preparando entrada de comandos' + '\n', (name) => {
    console.log(`Comando Ingresado: ${name}`);
    device.ejecutar(name);
    //readline.close()
});