export class ComunicationServiceIO {

    socketIO;

    constructor(port, device) {
        const
        io = require("socket.io"),
        server = io.listen(port);
    
    server.on("connection", (socket) => {
        console.info(`Client connected [id=${socket.id}]`);
    
        socket.on('message',  (message) => {
            console.log('received: %s', message);
            device.ejecutor(message);
          });
        
        //El servidor admite solo una conexion
        this.socketIO = socket;
    });
    }

         /**
     * envia en JSON string un mensaje
     * @param {string} message 
     */
    sendJson( message ) {
        console.log('enviado: %s', JSON.stringify(message));
        this.socketIO.emit('message', JSON.stringify(message));
    }
}