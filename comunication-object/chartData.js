import { Punto } from "./point";

export class ChartData {

    chartName;
    points;

    /**
    * @param {string} chartName 
    * @param {Array of Point} points 
    */
    constructor(chartName,points) {
        this.chartName = chartName;
        this.points = points;
    }

    addPoint(x, y){
        if(this.points === undefined || this.points === null){
            this.points = [];
        }
        this.points.push(new Punto(x, y));
    }
    
    /**
     * metodo de obtencion de valores de abscisas
     * @returns Array de numbers
     */
    getXValues(){
        let result = [];
        this.points.forEach(element => {
            result.push(element.x);
        });
        return result; 
    }

    /**
     * metodo de obtencion de valores de ordenadas
     * @returns Array de numbers
     */
    getYValues(){
        let result = [];
        this.points.forEach(element => {
            result.push(element.y);
        });
        return result;
    }

    /**
     * metodo de obtencion de todos los puntos
     * @returns Array de puntos
     */
    getValues(){
        return this.points;
    }
}