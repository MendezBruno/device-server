import { FieldData } from "./fieldData";

export class ChartData {

    t;
    p;
    f;

    /**
    * @param {string} chartName 
    * @param {Array of Point} points 
    */
    constructor(chartName,points) {
        this.addField(new FieldData("Name", chartName));
        this.p = points;
        this.t = "CD";
    }

    addField(fieldData){
        if(this.f === undefined || this.f === null){
            this.f = [];
        }

        this.f.push(fieldData);
    }

    checkIfPointsAreAreated(){
        if(this.p === undefined || this.p === null){
            this.p = [];
        }
    }

    addPoint(x, y){
        this.checkIfPointsAreAreated();
        this.p.push([x, y]);
    }

    addXPoint(pointsX){
        this.checkIfPointsAreAreated();

        for(let i = 0; i < pointsX.length; i++){
            if (this.p[i] === undefined || this.p[i] === null){
                this.p[i] = [pointsX[i], null];
            }
            else{
                //Porque solo queremos actualizar el valor de X
                this.p[i][0] = pointsX[i];
            }
        }
    }

    addYPoint(pointsY){
        this.checkIfPointsAreAreated();

        for(let i = 0; i < pointsY.length; i++){
            if (this.p[i] === undefined || this.p[i] === null){
                this.p[i] = [null, pointsY[i]];
            }
            else{
                //Porque solo queremos actualizar el valor de Y
                this.p[i][1] = pointsY[i];
            }
        }
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