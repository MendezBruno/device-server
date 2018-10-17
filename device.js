import  { Operation } from './operation';
import { ComunicationService } from './comunication';
import {FieldData} from './comunication-object/fieldData';
import { Command } from './comunication-object/command';
import {ComunicationObject} from './comunication-object/comunicationObject';
import { ChartData } from './comunication-object/chartData'

export class Device {

    hilo;
    hiloField;
    operation;

    constructor(name, port) {
        this.name = name;
        //TODO. revisar esta logica de referencia doble, por el momento pasamos por parametro el device para poder ejecutar comandos de llegada
        this.comunication = new ComunicationService(port, this);
        this.operation = new Operation();
    }

    ejecutar(commandToLine){
        if(commandToLine == 'test'){
            let fieldData = new FieldData('tc', this.operation.getRandomInt(2, 233).toString());
            let fieldDataToSend = new ComunicationObject();
            fieldDataToSend.setField(fieldData);
            this.comunication.sendJson(fieldDataToSend);
        }
    }
    
    ejecutor(comunicationObject) {
        let comunicationObjectReal = new ComunicationObject();
        Object.assign(comunicationObjectReal, JSON.parse(comunicationObject));
    
        let datoRecibido = comunicationObjectReal.getRealObject();

        if(datoRecibido instanceof Command){
            if(datoRecibido.commandName == "updateField"){
                this.starField(datoRecibido.getParameter(0));
            }
            if(datoRecibido.commandName == "updateChart"){
                this.starChart();
            }
        }
    }

    starField(aParameter){
        this.hiloField = setInterval( () => 
            {
                //Creamos un objeto para la actualizacion del campo y lo enviamos.
                //Como el nombre del campo a actualizar llego como parametro en el comando ya sabemos a que campo debemos pegarle
                let fieldData = new FieldData(aParameter.parameterValue, this.operation.getRandomInt(2, 233).toString());
                let fieldDataToSend = new ComunicationObject();
                fieldDataToSend.setField(fieldData);
                this.comunication.sendJson(fieldDataToSend);
            }, 300);
    }

    starChart() {
        this.hilo = setInterval( () => 
            {
                //Creamos un objeto para la actualizacion del chart y lo enviamos.
                //Por el momento no tenemos el nombre del grafico, es siempre el mismo
                //let chartData = new ChartData("GRAFICO_X", this.operation.assembleRandomData());
                let chartData = this.operation.assembleRandomData();
                let chartdDataToSend = new ComunicationObject();
                chartdDataToSend.setChart(chartData);
                this.comunication.sendJson(chartdDataToSend);
            }, 500);
    }

    stop() {
        clearInterval(this.hilo);
        clearInterval(this.hiloField);
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

