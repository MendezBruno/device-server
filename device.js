import  { Operation } from './operation';
import { ComunicationService } from './comunication';
import {FieldData} from './comunication-object/fieldData';
import { Command } from './comunication-object/command';

export class Device {

    hilo;
    hiloField;
    operation;
    nameGrafic = "GRAFICO_X";

    constructor(name, port) {
        this.name = name;
        //TODO. revisar esta logica de referencia doble, por el momento pasamos por parametro el device para poder ejecutar comandos de llegada
        this.comunication = new ComunicationService(port, this);
        this.operation = new Operation();
    }

    ejecutar(commandToLine){
        if(commandToLine == 'tc'){
            let fieldData = new FieldData('Tc', this.operation.getRandomInt(2, 233).toString());
            this.comunication.sendJson(fieldData);
        }
        if(commandToLine == 'sin'){
            this.comunication.sendJson(this.operation.getSinGrafics());
        }
        if(commandToLine == 'strai'){
            this.comunication.sendJson(this.operation.getStraightGrafics());
        }
        if(commandToLine == 'fac'){
            this.comunication.sendJson(this.operation.graficoFacundo());
        }
        if(commandToLine == 'field'){
            this.starCompleteField();
        }
    }
    
    ejecutor(comunicationObject) {
        let comunicationObjectAux = JSON.parse(comunicationObject);

        if(comunicationObjectAux.t == "C"){
            //Significa que llego un comando
            let objectReal;
            objectReal = new Command();
            Object.assign(objectReal, comunicationObjectAux);

            if(objectReal.cn == "updateChart"){
                let chartData = this.operation.assembleRandomData(this.nameGrafic);
                this.comunication.sendJson(chartData);
            }

            if(objectReal.cn == "updateName"){
                //En nuestro caso, vamos a tomar el comnando actualizacion de nombre como el envio de una curva segun ese nombre o si no
                //se reconoce el nombre será el cambio para el nombre de los gráficos comunes.
                //Tambien puede llegar un nombre de grafico correspondiente al pedido de actualizacion de campo
                this.enviarGraficoOCampoSegun(objectReal.getParameter(0)[1]);
            }
        }
    }

    enviarGraficoOCampoSegun(unNombre){
        if(unNombre == 'sin'){
            return this.comunication.sendJson(this.operation.getSinGrafics());
        }
        if(unNombre == 'strai'){
            return this.comunication.sendJson(this.operation.getStraightGrafics());
        }
        if(unNombre == 'fac'){
            return this.comunication.sendJson(this.operation.graficoFacundo());
        }

        if(unNombre == 'fac2'){
            return this.comunication.sendJson(this.operation.graficoFacundo2());
        }

        if(unNombre == 'fac3'){
            return this.comunication.sendJson(this.operation.graficoFacundo3());
        }

        if(unNombre == 'fac4'){
            return this.comunication.sendJson(this.operation.graficoFacundo4());
        }

        if(unNombre == 'fac5'){
            return this.comunication.sendJson(this.operation.graficoFacundo5());
        }

        if(unNombre == 'fac6'){
            return this.comunication.sendJson(this.operation.graficoFacundo6());
        }

        if(unNombre == 'fac7'){
            return this.comunication.sendJson(this.operation.graficoFacundo7());
        }

        let fieldData;
        if(unNombre == 'tc'){
            fieldData = new FieldData('Tc', this.operation.getRandomInt(2, 233).toString());
            this.comunication.sendJson(fieldData);
            return;
        }
        if(unNombre == 'voc'){
            fieldData = new FieldData('Voc', this.operation.getRandomInt(2, 233).toString());
            this.comunication.sendJson(fieldData);
            return;
        }
        if(unNombre == 'g'){
            fieldData = new FieldData('G', this.operation.getRandomInt(2, 233).toString());
            this.comunication.sendJson(fieldData);
            return;
        }
        if(unNombre == 'e1000'){
            fieldData = new FieldData('E1000', this.operation.getRandomInt(0, 100).toString());
            this.comunication.sendJson(fieldData);
            return;
        }
        if(unNombre == 'esens'){
            fieldData = new FieldData('ESens', 100 - this.operation.getRandomInt(0, 100).toString());
            this.comunication.sendJson(fieldData);
            return;
        }
        if(unNombre == 'hr'){
            fieldData = new FieldData('Hr', Math.round((new Date()).getTime() / 1000));
            this.comunication.sendJson(fieldData);
            return;
        }
        if(unNombre == 'sens'){
            let numero = this.operation.getRandomInt(0, 5);
            if(numero >= 3){
                fieldData = new FieldData('Sens', "modref");
            }
            else{
                fieldData = new FieldData('Sens', "pt1000");  
            }
            this.comunication.sendJson(fieldData);
            return;
        }

        if(unNombre == 'isc'){
            fieldData = new FieldData('Isc', this.operation.getRandomInt(0, 1200).toString());
            this.comunication.sendJson(fieldData);
            return;
        }

        if(unNombre == 'pm'){
            fieldData = new FieldData('Pm', this.operation.getRandomInt(0, 10000).toString());
            this.comunication.sendJson(fieldData);
            return;
        }

        if(unNombre == 'vocg'){
            fieldData = new FieldData('Vocg', this.operation.getRandomInt(0, 10000).toString());
            this.comunication.sendJson(fieldData);
            return;
        }

        if(unNombre == 'error'){
            fieldData = new FieldData('Error', this.operation.getErrorMessage());
            this.comunication.sendJson(fieldData);
            return;
        }

        if(unNombre == 'gs'){
            fieldData = new FieldData('Gs', "Saved");
            this.comunication.sendJson(fieldData);
            return;
        }

        this.nameGrafic = unNombre;
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

    starCompleteField(){
        clearInterval(this.hiloField);
        var porcentaje = 100;
        this.hiloField = setInterval( () => 
            {
                let fieldData = new FieldData('Tc', this.operation.getRandomInt(2, 233).toString());
                this.comunication.sendJson(fieldData);
                fieldData = new FieldData('Voc', this.operation.getRandomInt(2, 233).toString());
                this.comunication.sendJson(fieldData);
                fieldData = new FieldData('G', this.operation.getRandomInt(2, 233).toString());
                this.comunication.sendJson(fieldData);

                //Algoritmo para actualizar las baterias.
                fieldData = new FieldData('E1000', porcentaje);
                this.comunication.sendJson(fieldData);
                fieldData = new FieldData('ESens', 100 - porcentaje);
                this.comunication.sendJson(fieldData);
                if(porcentaje > 0){
                    porcentaje = porcentaje - 1;
                }
                else{
                    porcentaje = 100;
                }

                //Actualizamos la hora, no importa que el requerimiento pide cada 1 segundo, es solo prueba
                fieldData = new FieldData('Hr', Math.round((new Date()).getTime() / 1000));
                this.comunication.sendJson(fieldData);

                //Actualizamos el tipo de sensor, sabemos que solo se hace una vez al iniciar, pero para prueba lo hacemos desde aca
                let numero = this.operation.getRandomInt(0, 5);
                if(numero >= 3){
                    fieldData = new FieldData('Sens', "modref");
                }
                else{
                    fieldData = new FieldData('Sens', "pt1000");  
                }
                this.comunication.sendJson(fieldData);


                fieldData = new FieldData('Isc', this.operation.getRandomInt(0, 1200).toString());
                this.comunication.sendJson(fieldData);

                fieldData = new FieldData('Pm', this.operation.getRandomInt(0, 10000).toString());
                this.comunication.sendJson(fieldData);

                fieldData = new FieldData('Vocg', this.operation.getRandomInt(0, 10000).toString());
                this.comunication.sendJson(fieldData);

            }, 300);
    }

    /**
     * Deprecado
     * @param {*} aParameter 
     */
    starChart(aParameter) {
        this.hilo = setInterval( () => 
            {
                //Creamos un objeto para la actualizacion del chart y lo enviamos.
                //Por el momento no tenemos el nombre del grafico, es siempre el mismo
                let chartData = this.operation.assembleRandomData(this.nameGrafic);
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

