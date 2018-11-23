import Punto from './comunication-object/point'
import { ChartData } from './comunication-object/chartData';

export class Operation {

  getSinGrafics(){
    var seno = new ChartData("SENO", []);
    var amplitud = this.getRandomInt(1, 10);
    for (let i=0; i<= 6.28319; i = i + 0.174533){
        seno.addPoint(i, Math.sin(i) * amplitud);
    }
    return seno;
  }

  getStraightGrafics(){
    var straight = new ChartData("Straight", []);
    let pendiente = this.getRandomInt(-10, 10);
    let b = this.getRandomInt(0, 100);
    for (let i=0; i<=20; i++){
      straight.addPoint(i, (pendiente * i) + b);
    }
    return straight;
  }

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

  graficoFacundo(){

    let dataAssemble = new ChartData("GRAFICO_X", []);

    dataAssemble.addXPoint([0.000,1.085,0.000,0.000,0.000,0.000,0.000,0.000,0.011,0.175,0.401,0.616,0.820,
                            1.034,1.247,1.469,1.682,1.889,2.098,2.311,2.532,2.746,2.952,3.163,3.379,3.596,
                            3.801,4.020,4.230,4.443,4.643,4.859,5.069,5.280,5.499,5.698,5.905,6.108,6.317,
                            6.526,6.734,6.936,7.148,7.353,7.565,7.763,7.974,8.188,8.394,8.594,8.806,9.006,
                            9.220,9.421,9.638,9.833,10.041,10.249,10.445,10.662,10.863,11.068,11.279,
                            11.482,11.692,11.883,12.089,12.307,12.508,12.714,12.921,13.116,13.320,13.520,
                            13.731,13.933,14.132,14.340,14.538,14.746,14.950,15.145,15.352,15.555,15.760,
                            15.961,16.156,16.370,16.569,16.764,16.975,17.175,17.378,17.578,17.786,17.980,
                            18.184,18.387,18.580,18.792,18.989,19.184,19.393,19.598,19.789,19.995,20.195,
                            20.396,20.590,20.792,20.997,21.185,21.397,21.582,21.786,21.979,22.160,22.361,
                            22.557,22.726,22.915,23.096,23.270,23.443,23.610,23.782,23.954,24.096,24.253,
                            24.396,24.542,24.675,24.810,24.931,25.059,25.176,25.286,25.399,25.492,25.582,
                            25.686,25.762,25.845,25.933,25.995,26.055,26.129,26.194,26.242,26.295,26.354,
                            26.409,26.440,26.484,26.512,26.554,26.592,26.625,26.651,26.684,26.705,26.727,
                            26.754,26.765,26.789,26.814,26.826,26.854,26.868,26.888,26.910,26.914,26.923,
                            26.934,26.945,26.956,26.975,26.977,26.987,26.991,26.997,27.003,27.015,27.028,
                            27.029,27.035,27.036,27.041,27.055,27.065,27.069,27.088,27.082,27.077,27.088,
                            27.092,27.096,27.094,27.113,27.206]);

    dataAssemble.addYPoint([0.000,2.458,2.104,2.068,2.067,2.066,2.065,2.065,2.064,2.065,2.064,2.063,2.063,
                            2.062,2.062,2.062,2.061,2.062,2.060,2.060,2.059,2.060,2.058,2.057,2.057,2.057,
                            2.056,2.054,2.053,2.051,2.049,2.049,2.047,2.046,2.042,2.039,2.034,2.024,2.017,
                            2.016,2.016,2.016,2.017,2.014,2.014,2.014,2.014,2.013,2.013,2.013,2.012,2.011,
                            2.012,2.011,2.010,2.010,2.009,2.009,2.008,2.007,2.006,2.006,2.006,2.005,2.003,
                            2.003,2.002,2.000,2.001,1.998,1.997,1.994,1.993,1.988,1.988,1.986,1.987,1.987,
                            1.986,1.985,1.986,1.985,1.984,1.984,1.985,1.984,1.983,1.984,1.983,1.983,1.983,
                            1.982,1.981,1.982,1.980,1.982,1.980,1.979,1.978,1.977,1.977,1.977,1.977,1.976,
                            1.976,1.975,1.976,1.973,1.973,1.970,1.970,1.967,1.962,1.955,1.945,1.936,1.924,
                            1.911,1.897,1.879,1.860,1.839,1.816,1.792,1.763,1.734,1.700,1.667,1.630,1.592,
                            1.549,1.509,1.464,1.420,1.375,1.326,1.280,1.232,1.184,1.138,1.090,1.046,1.000,
                            0.956,0.913,0.870,0.831,0.793,0.754,0.720,0.685,0.652,0.620,0.590,0.562,0.534,
                            0.510,0.486,0.462,0.441,0.418,0.400,0.381,0.363,0.347,0.331,0.316,0.303,0.288,
                            0.275,0.263,0.252,0.241,0.230,0.219,0.212,0.201,0.192,0.186,0.177,0.171,0.165,
                            0.157,0.150,0.145,0.141,0.134,0.128,0.123,0.118,0.115,0.111,0.106,0.104,0.097,
                            0.095,0.092,0.089,0.086,0.000]);

    return dataAssemble;
  }

}