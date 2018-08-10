import  * as Operation from './operation';
import * as Comunication from './comunication';


export class Device {

    hilo;
    
    constructor(name, port) {
        this.name = name;
        this.comunication = new Comunication.ComunicationService(port);
    }
    
    ejecutor(parameter) {
        Command[parameter];
    }

    start() {
        let points;
        this.hilo = setInterval( points = Operation.generatePoints() , 20000);
        this.comunication.sendJson(points);
    }

    stop() {
        clearInterval(this.hilo);
    }

}


var Command = {
    'Start' : start(),
    'Stop' : stop(),
    'Automatic' : automatic(),
    'Manual' : manual()
}
