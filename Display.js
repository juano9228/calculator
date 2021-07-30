class Display {
//Un constructor para cuando se instancie la clase, 
//se le puedan passar valores

    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }
    
    agregarNumero(numero){
        /*metodo para agregar los numeros a la calculadora
        recivir numero como paametro, y que valorActual, 
        osea el numero 
        que se esta agregando 
        sea igual alque recibimos
        ##El vlor actual de disply al valor del numero a typear
        */
       this.valorActual = numero; 
       this.imprimirValores();
      
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}