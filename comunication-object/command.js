import { Parameter } from "./parameter";

export class Command {
    t;
    cn;
    cp;

    constructor(commandName) {
        this.cm = commandName;
        this.cp = [];//Inicializamos el array de parametros
        this.t = "C";
    }

    addParameter(newParameter){
        this.cp.push(newParameter);
    }

    getParameter(index){
        return this.cp[index];
    }
}