class CantidadPasajeros {

    constructor(valor) {
        if (valor <= 0) {
            throw new Error("Cantidad de pasajeros inválida");
        }
        
        this.valor = valor;
        Object.freeze(this);
    }
    
}

module.exports = CantidadPasajeros;
