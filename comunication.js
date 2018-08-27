
const WebSocket = require('ws');

var ws;
export class ComunicationService {

    ws;
    /*constructor(port, device) {
        this.device = device;
        const wss = new WebSocket.Server({ port: port });
        wss.on('connection', function connection(ws) {
            this.ws = ws;
            console.log('user conected')
            ws.setEvent(this.eventNames.MENSSAGE, function incoming(message) {
                console.log('received: %s', message);
                this.action(message);
            });
        });
    }*/

    constructor(port, device) {
        const wss = new WebSocket.Server({ port: port });
        wss.on('connection', (ws) => {
            this.ws = ws;
            console.log('user conected')
            ws.on('message', function incoming(message) {
                console.log('received: %s', message);
                device.ejecutor(message);
            });
        });
    }

    /**
     * Funcion que hace Set del evento que va a ejecutar cuando le llega un nameEvent que coincide
     * @param {string} nameEvent es el nombre con cual se va a setear el evento 
     * @param {function} functionEvent la funcion que va a ejecutar el evento
     */
    setEvent(nameEvent, functionEvent) {
        ws.on(nameEvent[nameEvent], functionEvent);
    }
    /**
     * envia en formato string un mensaje
     * @param {string} message 
     */
    send(message) {
        ws.send(message, function ack(error) {
            console.error( error );
        })
    }
        
    

     /**
     * envia en JSON string un mensaje
     * @param {string} message 
     */
    sendJson( message ) {
        console.log('enviado: %s', JSON.stringify(message));
        this.ws.send(JSON.stringify(message));
    }

    nameEvent = {
        CONECTION : 'connection',
        MENSSAGE : 'message',
        CLOSE : 'close',
        OPEN : 'open',
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