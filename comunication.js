const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });


export class ComunicationService {

    constructor(port) {
        const wss = new WebSocket.Server({ port: port });
        wss.on('connection', function connection(ws) {
            console.log('user conected')
        });
        this.setEvent('message' , function incoming(message) {
            console.log('received: %s', message);
        });
    }

    /**
     * Funcion que hace Set del evento que va a ejecutar cuando le llega un nameEvent que coincide
     * @param {string} nameEvent es el nombre con cual se va a setear el evento 
     * @param {function} functionEvent la funcion que va a ejecutar el evento
     */
    setEvent(nameEvent, functionEvent) {
        ws.on(nameEvent, functionEvent);
    }
    /**
     * envia en formato string un mensaje, la idea es que sea un JSON stringify
     * @param {string} message 
     */
    send(message) {
        ws.send(message);
    }

    sendJson( aJson ) {
        ws.send(JSON.stringify(aJson));
    }

}



/*
    wss.on('connection', function connection(ws) {
        console.log('user conected')

        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });
        
          ws.send('something');
        
    });
*/