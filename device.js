import  { Operation } from './operation';
import { ComunicationService } from './comunication';



export class Device {

    hilo;


    
    constructor(name, port) {
        this.name = name;
        this.comunication = new ComunicationService(port);
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

    automatic() {}

    manual() {}

    // enum
    Command = {
        'Start' : this.start,
        'Stop' : this.stop,
        'Automatic' : this.automatic,
        'Manual' : this.manual
    }
}

