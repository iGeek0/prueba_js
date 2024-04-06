/*
El ejercicio consiste en una función que toma un array de números enteros y devuelve el segundo número más grande presente en el array. Si no hay un segundo número más grande, la función debe devolver null.
*/


function segundoMasGrande(array) {
    if (array.length < 2) {
        return null;
    }

    let max = null;
    let secondMax = null;
    if (array.length === 2) {
        if (array[0] === array[1]) {
            return null;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (max === null || array[i] > max) {
            secondMax = max;
            max = array[i];
        } else if (secondMax === null || array[i] > secondMax) {
            secondMax = array[i];
        }
    }

    return secondMax;
}


module.exports = segundoMasGrande;
