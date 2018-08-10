export class Point {
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }
}

export class GenericDatasetPoints {
    
    
    constructor (dataset) {
        this.dataset = dataset;
    }
 
    getXValues(){
      let result = [];
      this.dataset.forEach(element => {
        result.push(element.x);
      });
      return result;
  }

  getValues(){
    return this.dataset;
  }
}


export class ChartData {

   // chartName: string;
   // points: Point[];

   /**
    * @param {string} chartName 
    * @param {Array of Point} points 
    */
    constructor(chartName, points) {
        this.chartName = chartName;
        this.points = points;
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
