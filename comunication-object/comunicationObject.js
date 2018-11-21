import { Command } from "./command";
import { ChartData } from "./chartData";
import { FieldData } from "./fieldData";

/**
 * Deprecado
 */
export class ComunicationObject {

    type;
    object;

    constructor(type, object) {
        this.type = type;
        this.object = object;
    }

    setCommand(object){
        this.type = Command.name;
        this.object = object;
    }

    setChart(object){
        this.type = ChartData.name;
        this.object = object;
    }

    setField(object){
        this.type = FieldData.name;
        this.object = object;
    }

    getRealObject(){
        //TODO. Por el momento NO colocamos los tipos como Enun porque sino se anexan al JSON, generan un mensaje mas largo para enviar y no es lo que buscamos
        //En el servidor no nos interesa levantar esto por reflexion ya que es solo para probar el cliente.
        let newObject = null;
        if(this.type == Command.name){
            newObject = new Command();
        }
        if(this.type == ChartData.name){
            newObject = new ChartData();
        }
        if(this.type == FieldData.name){
            newObject = new FieldData();
        }
        Object.assign(newObject, this.object);
        return newObject;
    }
}