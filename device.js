import  * as Operation from './operation';



export class Device {

    constructor(name) {
        this.name = name;
    }
   
    ejecutor(parameter) {
        Command[parameter];
    }

    start() {
        let points;
        setInterval( points = Operation.generatePoints() , 20000);

    }

}


var Command = {
    'Start' : start(),
    'Stop' : stop(),
    'Automatic' : automatic(),
    'Manual' : manual()
}
