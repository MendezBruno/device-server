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
            this.comunication.sendJson(fieldData);
        }
    }
    
    ejecutor(comunicationObject) {
        let comunicationObjectAux = JSON.parse(comunicationObject);

        if(comunicationObjectAux.t == "C"){
            //Significa que llego un comando
            let objectReal;
            objectReal = new Command();
            Object.assign(objectReal, comunicationObjectAux);

            if(objectReal.cn == "updateField"){
                this.starField(objectReal.getParameter(0), objectReal.getParameter(1));
            }
            if(objectReal.cn == "updateChart"){
                clearInterval(this.hilo);
                this.starChart(objectReal.getParameter(0));
            }
            if(objectReal.cn == "updateChart2"){
                clearInterval(this.hilo);
                this.starChart2(objectReal.getParameter(0));
            }
        }
    }

    starField(aParameter, aParameter2){
        this.hiloField = setInterval( () => 
            {
                //Creamos un objeto para la actualizacion del campo y lo enviamos.
                //Como el nombre del campo a actualizar llego como parametro en el comando ya sabemos a que campo debemos pegarle
                let fieldData = new FieldData(aParameter[1], this.operation.getRandomInt(2, 233).toString());
                this.comunication.sendJson(fieldData);
            }, parseInt(aParameter2[1]));
    }

    starChart(aParameter) {
        this.hilo = setInterval( () => 
            {
                //Creamos un objeto para la actualizacion del chart y lo enviamos.
                //Por el momento no tenemos el nombre del grafico, es siempre el mismo
                let chartData = this.operation.assembleRandomData();
                this.comunication.sendJson(chartData);
            }, parseInt(aParameter[1]));
    }

    starChart2(aParameter) {
        //TODO. aca tenemos que armar el gráfico con los puntos del objeto ejemplo de Facundo
        this.hilo = setInterval( () => 
            {
                //Creamos un objeto para la actualizacion del chart y lo enviamos.
                //Por el momento no tenemos el nombre del grafico, es siempre el mismo
                let chartData = this.operation.graficoFacundo();
                this.comunication.sendJson(chartData);
            }, parseInt(aParameter[1]));
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

