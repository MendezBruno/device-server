const WebSocket = require('ws');

var ws;
export class ComunicationService {

    ws;
    constructor(port) {
        const wss = new WebSocket.Server({ port: port });
        wss.on('connection', function connection(ws) {
            this.ws = ws;
            console.log('user conected')
            this.setEvent(this.eventNames.MENSSAGE, function incoming(message) {
                console.log('received: %s', message);
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
     * envia en formato string un mensaje, la idea es que sea un JSON stringify
     * @param {JSON} aJson 
     */
    sendJson( aJson ) {
        ws.send(JSON.stringify(aJson));
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