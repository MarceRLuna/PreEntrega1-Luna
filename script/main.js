
//Funciones.

function areaCuadrado(a) {
    let resultado = a * a;
    alert("El área del cuadrado es: " + resultado + " m2");
}

function areaTriangulo(base, altura) {
    let resultado = (base * altura) / 2;
    alert("El área del triángulo es " + resultado + " m2");
}

function areaCircunferencia(radio) {
    let resultado = PI * (radio * radio);
    alert("El área de la circunferencia es: " + resultado + " m2");
}

//Variables, flujo de control y ciclo.

let area = parseInt(prompt("Ingrese el nro. 1 - si quiere calcular área de un cuadrado, nro. 2 - para calcular el área de triángulo y nro. 3 - para calcular el área de una circunferencia"));
let a = 0;
let base = 0;
let altura = 0;
const PI = 3.1416;
let radio = 0;

if (area > 0 && area < 4) {

    switch (area) {
        case 1:
            let a = parseFloat(prompt("Metros de uno de los lados?"));
            areaCuadrado(a);
            break;
        case 2:
            let base = parseFloat(prompt("Metros de la base del triángulo?"));
            let altura = parseFloat(prompt("Metros de la altura del triángulo?"));
            areaTriangulo(base, altura);
            break;
        case 3:
            let radio = parseFloat(prompt("Metros del radio de la circunferencia?"));
            areaCircunferencia(radio);
            break;
    
        default:
            
            break;
    }
    
} else {
    alert("El nro. y/o la palabra ingresada no representan una opción a elegir. Pulse F5 para recargar la página.")
}



