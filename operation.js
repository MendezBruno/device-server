import Point from './models'

export function generatePoints () {

    var i;
    var points = [];
    for (i = 0; i < 100; i++) { 
        generatedX += Math.random()*5;
        generatedy += Math.random()*5;
        points.push(new Point (generatedX, generatedy));
    }
    return points
}