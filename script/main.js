
//Funciones.

function areaCuadrado(a) {
    let resultado = a * a;
    alert("El area del cuadrado es: " + resultado);
}

function areaTriangulo(base, altura) {
    let resultado = (base * altura) / 2;
    alert("El area del triangulo es " + resultado);
}

function areaCircunferencia(radio) {
    let resultado = PI * (radio * radio);
    alert("El area de la circunferencia " + resultado);
}

//Variables y ciclo.

let area = parseInt(prompt("Ingrese el nro. 1 si quiere calcular area de un cuadrado, nro. 2 para area de triangulo, nro.3 para el area de una circunferencia"));
let a = 0;
let base = 0;
let altura = 0;
const PI = 3.14;
let radio = 0;

switch (area) {
    case 1:
        let a = parseFloat(prompt("metros de uno de los lados"));
        areaCuadrado(a);
        break;
    case 2:
        let base = parseFloat(prompt("metros de la base"));
        let altura = parseFloat(prompt("ingrese la altura"));
        areaTriangulo(base, altura);
        break;
    case 3:
        let radio = parseFloat(prompt("metros del radio de la circunferencia"));
        areaCircunferencia(radio);
        break;

    default:
        alert("El nro. ingresado no representa una opción");
        break;
}







