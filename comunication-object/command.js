import { Parameter } from "./parameter";

export class Command {
    commandName;
    commandParameters;

    constructor(commandName) {
        this.commandName = commandName;
        this.commandParameters = [];//Inicializamos el array de parametros
    }

    addParameter(newParameter){
        this.commandParameters.push(newParameter);
    }

    getParameter(index){
        return this.commandParameters[index];
    }
}