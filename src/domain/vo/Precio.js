class Precio {

    constructor(valor) {
        if (valor < 0) {
            throw new Error("El precio no puede ser negativo");
        }
        this.valor = valor;
        Object.freeze(this);
    }
    
}

module.exports = Precio;

