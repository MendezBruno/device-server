import { Punto } from "./point";

export class ChartData {

    t;
    cn;
    p;

    /**
    * @param {string} chartName 
    * @param {Array of Point} points 
    */
    constructor(chartName,points) {
        this.cn = chartName;
        this.p = points;
        this.t = "CD";
    }

    addPoint(x, y){
        if(this.p === undefined || this.p === null){
            this.p = [];
        }
        this.p.push([x, y]);
    }
    
    /**
     * metodo de obtencion de valores de abscisas
     * @returns Array de numbers
     */
    getXValues(){
        let result = [];
        this.p.forEach(element => {
            result.push(element[0]);
        });
        return result; 
    }

    /**
     * metodo de obtencion de valores de ordenadas
     * @returns Array de numbers
     */
    getYValues(){
        let result = [];
        this.p.forEach(element => {
            p.push(element[1]);
        });
        return result;
    }

    /**
     * metodo de obtencion de todos los puntos
     * @returns Array de puntos
     */
    getValues(){
        return this.p;
    }
}