class Display {
//Un constructor para cuando se instancie la clase, 
//se le puedan passar valores

    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            mul: 'x',
            restar: '-',
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();

    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    
    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        /*metodo para agregar los numeros a la calculadora
        recivir numero como paametro, y que valorActual, 
        osea el numero 
        que se esta agregando 
        sea igual alque recibimos
        ##El vlor actual de disply al valor del numero a typear
        */
       if (numero == '.' && this.valorActual.includes('.')) return
       this.valorActual = this.valorActual.toString() + numero.toString(); 
       this.imprimirValores();
      
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {//Tomar los valores que tiene display 
        //y pasarlos a calculadora para que haga los calculos

        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
       
    }

}