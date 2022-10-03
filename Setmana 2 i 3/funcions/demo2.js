// SEGUINT LES DIAPOSITIVES...
/*
let producte1 = 10.95;
let producte2 = 19.95;
let producte3 = 100.95;
let producte4 = 9.95;
let producte5 = 9.95;
let producte6 = 9.95;
let producte7 = 9.95;
let producte8 = 9.95;
let producte9 = 9.95;
let producte10 = 9.95;
let producte11 = 9.95;
let producte12 = 9.95;

//let total = suma(producto1, producto2);
console.log(suma(producte1, producte2));
console.log(suma(producte1, producte2, producte3));

console.log(suma(10, 10));
console.log(suma(9.95, producte12));

console.log("con IVA la suma es de " + sumaIVA(producte6, producte9));

function suma (a, b) {
    return a + b;
}

function suma (a, b, c) {
    return a + b + c;
}

function sumaIVA (a, b) {
    let iva = 0.21;
    let calculoIVA = (a + b) * iva;
    let total = (a + b) + calculoIVA;
    return total;
}*/


console.log(multiplicarPorCinco1(100));

let grabandoVariable = multiplicarPorCinco2(100, 100);

console.log(grabandoVariable);

function multiplicarPorCinco1(x) {

    return x * 5;

}

function multiplicarPorCinco2(x, x) {

    return (x + x) * 5;

}