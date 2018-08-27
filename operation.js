import Punto from './comunication-object/point'
import { ChartData } from './comunication-object/chartData';

export class Operation {

 generatePoints () {

    var i;
    var points = [];
    for (i = 0; i < 100; i++) { 
        generatedX += Math.random()*5;
        generatedy += Math.random()*5;
        points.push(new Point (generatedX, generatedy));
    }
    return points
}

 getRandomInt(min, max) {
    var diff = max - min;
    var value = (Math.floor(Math.random() * Math.floor(diff))) + min;
    if(value > max){
      return max;
    }
    return value;
  }

  assembleRandomData(){
    //No definimos 200 valores porque el grafico colapsa, hay que buscar la forma para que el grafico se vea mas grande.
    //Definimos los valores maximos posibles
    let maximumScaleInX = 100;
    var maximumValueInX = [];
    var maximumValueInY = 100;
    let dataAssemble = new ChartData("GRAFICO_X", []);

    var scaleInX = this.getRandomInt(0, maximumScaleInX - 1);

    for(var j = 1; j < maximumScaleInX; j++){
      maximumValueInX.push(j*10);
    }

    for (var i = 0; i < scaleInX; i++)
    {
      dataAssemble.addPoint(this.getRandomInt(maximumValueInX[i], maximumValueInX[i + 1]),this.getRandomInt(0, maximumValueInY));
    }

    return dataAssemble;
  }

}