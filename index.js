//SELECCIONAR TODOS LOS NODOS DEL HTML
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
//Crear un nuevo archivo Calculadora.js la primera
//en mayuscula ya que va a ser una clase

/*const calculadora = new Calculadora();
console.log(calculadora.sumar(2,2))
console.log(calculadora.resta(2,10))
//Display.js esta clase va a ser la encargada de controlar
//los botones*/

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
    /*cada vez que se precione un boton
    que el display agregue un numero, el numero que 
    pertenece, cada vez que de click en uno de los botones
    va pasar el su innerHTML como parametro*/
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});